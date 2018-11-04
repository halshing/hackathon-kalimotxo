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
  };
  ratingChart;
  constructor(
    private notification: NotificationService,
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
        Number(rating.position.latitude).toFixed(3) === this.businessAddress.location.lat.toFixed(3) &&
        Number(rating.position.longitude).toFixed(3) === this.businessAddress.location.lng.toFixed(3)
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
    this.http
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          this.searchedAddress
        }&key=AIzaSyBcLktjNns_EY7hM8iY5jHl9UA0JnHi35E
    `,
      )
      .subscribe((res: any) => {
        this.businessAddress.formatted_address = res.results[0].formatted_address;
        this.businessAddress.location = res.results[0].geometry.location;
        this.displayRatings();
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
}
