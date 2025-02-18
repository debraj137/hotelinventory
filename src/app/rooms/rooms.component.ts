import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel!';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList:RoomList[] = [];
  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent
  title = 'Room  List'

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }
  ngDoCheck(): void {
    console.log('on changes is called');
  }


  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
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
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List News"
  }

  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room
  }

  addRoom(){
    const room:RoomList = {
      roomNumber: 4,
      roomType: 'Private Suite',
      amenities: 'AC, Free-Wifi, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://media.istockphoto.com/id/1208955086/photo/door-opened-to-bedroom.jpg?s=1024x1024&w=is&k=20&c=6t4VanNXaVaGcZatu9P1dBSJG1fa1NHeft9yZiFkIIc=',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.7
    }

    // this.roomList.push(room);
    // for change detection
    this.roomList = [...this.roomList, room];
  }
}
