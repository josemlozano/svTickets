import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SVEvent } from 'src/app/interfaces/svevent';
import { EventsServicesService } from '../services/events-services.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: SVEvent[] = [];
  search = '';

  showImage = false;
  constructor(
    private eventsService: EventsServicesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getEvents();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.getEvents();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getEvents() {
    this.eventsService.getEvents().subscribe({
      next: (eventsServ) => (this.events = eventsServ),
      error: (error) => console.log(error),
      complete: () => console.log('Events loaded'),
    });
  }

  delete(event: SVEvent) {
    this.eventsService.deleteEvent(event.id).subscribe({
      next: () => (this.events = this.events.filter((e) => e !== event)),
      error: (error) => console.error(error),
    });
  }

  orderByDate() {
    this.search = '';
    this.events.sort((e1, e2) => e1.date.localeCompare(e2.date));
  }

  orderByPrice() {
    this.search = '';
    this.events.sort((e1, e2) => e1.price - e2.price);
  }

  updateAttend(event: SVEvent) {
    this.eventsService.updateAttend(event.id).subscribe({
      next: (response) => {
        this.ngOnInit();
      },
    });
  }

  deleteAttend(event: SVEvent) {
    this.eventsService.deleteAttend(event.id).subscribe({
      next: (response) => {
        this.ngOnInit();
      },
    });
  }

  formatDate(value: string) {
    let dateFormated = '';

    try {
      dateFormated = format(parseISO(value), 'dd/MM/yyyy');
    } catch (err) {}

    return dateFormated;
  }

  async presentAlert(event: SVEvent) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Do you want to delete the event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('');
          },
        },
        {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.delete(event);
          },
        },
      ],
    });

    await alert.present();
  }
}
