import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/services/notification.service';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.less'],
})
export class HeatMapComponent implements OnInit {
  options = {
    center: { lat: 14.4426, lng: 79.9865 },
    zoom: 12,
  };
  position;
  constructor(private notification: NotificationService) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
        this.options.center.lat = position.coords.latitude;
        this.options.center.lng = position.coords.longitude;
      });
    } else {
      this.notification.displayError({ name: 'Geolocation is not supported by this browser.' });
    }
  }
}
