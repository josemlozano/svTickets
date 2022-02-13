import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import * as Mapboxgl from 'mapbox-gl';
import { SVEvent } from 'src/app/interfaces/svevent';
import { MyGeolocation } from 'src/app/mygeolocation/my-geolocation.service';
import { EventsServicesService } from '../services/events-services.service';
import { format, parseISO } from 'date-fns';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {
  imageName = '';
  showImage = false;
  leavePage = true;
  newEvent!: SVEvent;
  today = new Date();
  longitude = 0;
  latitude = 0;
  zoom = 14;
  mapMarker: mapboxgl.Marker = new Mapboxgl.Marker();
  mapa: mapboxgl.Map;

  constructor(
    private eventsService: EventsServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ionViewDidEnter() {
    this.buildMap();
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

  changeImage(fileInput: HTMLInputElement) {
    this.leavePage = false;
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
      this.showImage = true;
    });
  }

  initForm() {
    this.newEvent = {
      title: '',
      date: '',
      description: '',
      image: '',
      price: 0,
      lat: 0,
      lng: 0,
      address: '',
    };
    this.imageName = '';
    this.showImage = false;
    this.leavePage = true;
  }

  addEvent() {
    this.newEvent.lng = this.longitude;
    this.newEvent.lat = this.latitude;

    this.eventsService.addEvent(this.newEvent).subscribe({
      next: (ev) => {
        this.leavePage = true;
        this.router.navigate(['/events/list']);
      },
      error: (error) => console.log(error),
    });
  }

  validateClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    if (ngModel.dirty) {
      this.leavePage = false;
    }
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  formatDate(value: string) {
    let dateFormated = '';

    try {
      dateFormated = format(parseISO(value), 'dd/MM/yyyy');
    } catch (err) {}

    return dateFormated;
  }

  async imagePicker() {
    const takePicture = await Camera.getPhoto({
      source: CameraSource.Prompt,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
    });

    this.newEvent.image = takePicture.dataUrl;
    this.showImage = true;

    const imgRes = [];
  }

  async buildMap() {
    const pos = await MyGeolocation.getLocation();
    this.longitude = pos.longitude;
    this.latitude = pos.latitude;

    (Mapboxgl.accessToken as string) = environment.mapkey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitude, this.latitude], // starting position
      zoom: 14, // starting zoom
    });

    this.createMarker(
      'red',
      new Mapboxgl.LngLat(this.longitude, this.latitude)
    );

    const geocoder = new MapboxGeocoder({
      accessToken: Mapboxgl.accessToken,
      mapboxgl,
    });
    this.mapa.addControl(geocoder);

    geocoder.on('result', (e: any) => {
      new Mapboxgl.Popup().setLngLat(e.result.center).addTo(this.mapa);

      this.latitude = e.result.center[1];
      this.longitude = e.result.center[0];
      this.newEvent.address = e.result.place_name;
    });

    this.mapa.on('click', (e) => {
      this.mapa.panTo(e.lngLat);
      new Mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`Latitude: ${e.lngLat.lat}<br>Longitude: ${e.lngLat.lng}`)
        .addTo(this.mapa);
      this.createMarkerPosition('green', e.lngLat);
      this.latitude = e.lngLat.lat;
      this.longitude = e.lngLat.lng;
    });
  }
}
