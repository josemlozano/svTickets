import { Component, Inject, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SVEvent } from 'src/app/interfaces/svevent';
import { EventDetailsPage } from '../event-details/event-details.page';
import { EventsServicesService } from '../services/events-services.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/svuser';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {
  event: SVEvent;
  user: User;

  constructor(
    @Inject(EventDetailsPage) private parentComponent: EventDetailsPage,
    private eventsService: EventsServicesService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = {
      avatar: '',
      name: '',
      email: '',
      lat: 0,
      lng: 0,
    };

    this.event = {
      title: '',
      description: '',
      image: '',
      price: 0,
      lat: 0,
      lng: 0,
      address: '',
      date: '',
      creator: this.user,
    };
    this.parentComponent.event$.subscribe((event) => (this.event = event));
  }

  delete(event: SVEvent) {
    this.eventsService.deleteEvent(event.id).subscribe({
      next: () => this.router.navigate(['/events/list']),
      error: (error) => console.error(error),
    });
  }

  updateAttend(event: SVEvent) {
    this.eventsService.updateAttend(event.id).subscribe({
      next: () => {
        this.ngOnInit();
      },
    });
  }

  deleteAttend(event: SVEvent) {
    this.eventsService.deleteAttend(event.id).subscribe({
      next: () => {
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
          handler: () => {
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
