import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  onMapLoad(mapInstance: google.maps.Map) {
      const map = mapInstance;
      let heatmap = null;

      const coords: google.maps.LatLng[] = [
        new google.maps.LatLng( 51.45, -2.5879),
        new google.maps.LatLng( 51.45, -2.5878),
        new google.maps.LatLng( 51.45, -2.5877),
        new google.maps.LatLng( 51.45, -2.5876),
        new google.maps.LatLng( 51.451, -2.5877),
        new google.maps.LatLng( 51.451, -2.5872),
        new google.maps.LatLng( 51.451, -2.5878)
      ]

      heatmap = new google.maps.visualization.HeatmapLayer({
          map: map,
          data: coords,
          radius: 50,
          opacity: 1
      });
  }

  lat = 51.45;
  lng = -2.5879;
  zoom = 16;
}
