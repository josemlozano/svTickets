import { Component, Inject, OnInit } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import * as Mapboxgl from 'mapbox-gl';

import { SVEvent } from 'src/app/interfaces/svevent';
import { environment } from 'src/environments/environment';
import { EventDetailsPage } from '../event-details/event-details.page';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.page.html',
  styleUrls: ['./event-location.page.scss'],
})
export class EventLocationPage implements OnInit {
  filteredItems: string[];
  mapa: mapboxgl.Map;
  event: SVEvent;
  mapMarker: mapboxgl.Marker = new Mapboxgl.Marker();

  constructor(
    @Inject(EventDetailsPage) private parentComponent: EventDetailsPage
  ) {}

  ngOnInit() {
    this.event = {
      title: '',
      description: '',
      image: '',
      price: 0,
      lat: 0,
      lng: 0,
      address: '',
      date: '',
    };
    this.parentComponent.event$.subscribe((event) => (this.event = event));
  }

  ionViewDidEnter() {
    this.buildMap();
  }

  buildMap() {
    (Mapboxgl.accessToken as string) = environment.mapkey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.event.lng, this.event.lat], // starting position
      zoom: 14, // starting zoom
    });

    this.createMarker(
      'red',
      new Mapboxgl.LngLat(this.event.lng, this.event.lat)
    );
  }

  createMarker(color: string, lngLat: mapboxgl.LngLatLike): void {
    const mp = new Mapboxgl.Marker({ color }).setLngLat(lngLat);
    mp.addTo(this.mapa);
  }

  createMarkerPosition(color: string, lngLat: mapboxgl.LngLatLike): void {
    if (this.mapMarker != null) {
      this.mapMarker.remove();
    }
    this.mapMarker = new Mapboxgl.Marker({ color })
      .setLngLat(lngLat)
      .addTo(this.mapa);
  }
}
