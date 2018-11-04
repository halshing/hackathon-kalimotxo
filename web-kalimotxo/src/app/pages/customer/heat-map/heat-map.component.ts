import { Component, OnInit } from '@angular/core';
import { BartenderService } from '@app/services/bartender.service';
import { NotificationService } from '@app/services/notification.service';
import * as _ from 'lodash';
declare var google;
@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.less'],
})
export class HeatMapComponent implements OnInit {
  loading = true;
  options = {
    center: { lat: 0, lng: 0 },
    zoom: 12,
  };
  position;
  infoWindow: any;

  overlays: any[] = [];

  constructor(private notification: NotificationService, private bartenderService: BartenderService) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
        this.options.center.lat = position.coords.latitude;
        this.options.center.lng = position.coords.longitude;
        this.initOverlays();
        this.loading = false;
      });
    } else {
      this.notification.displayError({ name: 'Geolocation is not supported by this browser.', message: '' });
    }

    this.bartenderService.getAllRatings().subscribe((res) => {
      if (!_.isNull(res.result.ratings)) {
        const ratings = res.result.ratings;
        ratings.forEach((rating) => {
          if (!_.isNull(rating.position) && !_.isUndefined(rating.position) && rating.position !== '[object Object]') {
            this.overlays.push(
              new google.maps.Marker({
                position: { lat: Number(rating.position.latitude), lng: Number(rating.position.longitude) },
                title: rating.comment,
                animation: google.maps.Animation.DROP,
              }),
            );
          }
        });
      }
    });
    this.infoWindow = new google.maps.InfoWindow();
  }

  initOverlays() {
    const image = {
      url: 'https://img.icons8.com/dusk/50/000000/marker.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(64, 64),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(32, 64),
    };
    const shape = {
      coords: [0, 0, 0, 64, 64, 64, 64, 0],
      type: 'poly',
    };
    if (!this.overlays || !this.overlays.length) {
      this.overlays.push(
        new google.maps.Marker({
          position: { lat: this.options.center.lat, lng: this.options.center.lng },
          icon: image,
          shape,
          title: 'You are here!!',
          animation: google.maps.Animation.DROP,
        }),
      );
    }
  }

  handleOverlayClick(event) {
    const isMarker = event.overlay.getTitle !== undefined;
    if (isMarker) {
      const title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
  }
}
