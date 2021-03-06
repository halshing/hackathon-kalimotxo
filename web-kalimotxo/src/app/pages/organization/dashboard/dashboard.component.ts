import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Rating } from '@app/models/rating';
import { BartenderService } from '@app/services/bartender.service';
import { NotificationService } from '@app/services/notification.service';
import * as _ from 'lodash';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(UIChart)
  chart: UIChart;

  ratingsList = [];

  searchedAddress;
  ratingsFiltered: Rating[];
  businessAddress: BusinessAddress = {
    formatted_address: '',
    location: '',
    bounds: ''
  };
  ratingChart;
  constructor(
    private notificationService: NotificationService,
    private bartenderService: BartenderService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.ratingChart = this.getInitConfigForRatingChart();
    this.bartenderService.getAllRatings().subscribe((res) => {
      if (!_.isNull(res.result.ratings)) {
        const ratings = res.result.ratings;
        ratings.forEach((rating) => {
          if (!_.isNull(rating.position) && !_.isUndefined(rating.position) && rating.position !== '[object Object]') {
            this.ratingsList.push(rating);
          }
        });
      }
    });
  }

  displayRatings() {
    this.ratingsFiltered = this.ratingsList.filter((rating) => {
      return (
        (rating.position.latitude < this.businessAddress.bounds.northeast.lat && rating.position.longitude < this.businessAddress.bounds.northeast.lng) &&
        (rating.position.latitude > this.businessAddress.bounds.southwest.lat && rating.position.longitude > this.businessAddress.bounds.southwest.lng)
        // Number(rating.position.latitude).toFixed(3) === this.businessAddress.location.lat.toFixed(3) &&
        // Number(rating.position.longitude).toFixed(3) === this.businessAddress.location.lng.toFixed(3)
      );
    });
    this.populateChart();
  }

  populateChart() {
    const ratingscount = [0, 0, 0, 0, 0];
    this.ratingsFiltered.forEach((rating) => {
      ratingscount[Number(rating.rating) - 1] = ratingscount[Number(rating.rating) - 1] + 1;
    });
    this.ratingChart.datasets[0].data = ratingscount;
    this.chart.refresh();
  }

  search() {
    this.http.post('searchLocation', { query: this.searchedAddress }).subscribe((res: any) => {
      if (res.error) {
        this.notificationService.displayError({
          name: '',
          message: 'Empty address',
        });
      } else {
        this.businessAddress.formatted_address = res.result[0].formatted_address;
        this.businessAddress.location = res.result[0].geometry.location;
        this.businessAddress.bounds = res.result[0].geometry.bounds;
        this.displayRatings();
      }
    });
  }
  getInitConfigForRatingChart() {
    return {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Rating Chart',
          data: [],
          backgroundColor: ['#e81700', '#82190e', '#FFCE56', '#d3f954', '#56f442'],
        },
      ],
    };
  }
}

interface BusinessAddress {
  formatted_address;
  location;
  bounds;
}
