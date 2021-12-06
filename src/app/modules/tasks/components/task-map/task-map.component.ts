import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

import { MapService } from '../../services/map.service';

// configuring marker icons
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'tw-task-map',
  templateUrl: './task-map.component.html',
  styleUrls: ['./task-map.component.css'],
})
export class TaskMapComponent implements AfterViewInit {
  map!: L.Map;

  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    this.initMap();
    this.mapService.addTaskMarkers(this.map);
  }

  initMap(): void {
    this.map = L.map('map', {
      // map centered in Bogotá D.C. (Colombia)
      center: [4.7139818237390605, -74.0817244464162],
      zoom: 3,
    });

    // kind of providing the tiles that compose the map
    const tiles: L.TileLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
