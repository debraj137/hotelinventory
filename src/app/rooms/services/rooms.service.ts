import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free-Wifi, Bathroom, Kitchen',
      price: 500,
      photos: 'https://media.istockphoto.com/id/1208955086/photo/door-opened-to-bedroom.jpg?s=1024x1024&w=is&k=20&c=6t4VanNXaVaGcZatu9P1dBSJG1fa1NHeft9yZiFkIIc=',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'AC, Free-Wifi, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://media.istockphoto.com/id/1208955086/photo/door-opened-to-bedroom.jpg?s=1024x1024&w=is&k=20&c=6t4VanNXaVaGcZatu9P1dBSJG1fa1NHeft9yZiFkIIc=',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.4
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'AC, Free-Wifi, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://media.istockphoto.com/id/1208955086/photo/door-opened-to-bedroom.jpg?s=1024x1024&w=is&k=20&c=6t4VanNXaVaGcZatu9P1dBSJG1fa1NHeft9yZiFkIIc=',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.6
    }
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('rooms service get initialized');
    console.log(this.config.apiEndpoint);
   }



  getRooms(){
    return this.roomList;
  }
}
