import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotel!';
  numberOfRooms = 10;
  hideRooms = true;
  selectedRoom!: RoomList
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  totalBytes = 0;
  subscription!: Subscription
  roomList:RoomList[] = [];
  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  title = 'Room  List'

  constructor(@SkipSelf() private roomsService: RoomsService) {}
  ngAfterViewChecked(): void {
    //give error in dev mode
    // this.headerComponent.title = "Hotel Tittle After View Checked"
  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    console.log(this.headerChildrenComponent.last.title = 'Last Title');
    this.headerChildrenComponent.last.title = 'Last Title'
  }
  ngDoCheck(): void {
    console.log('on changes is called');
  }


  ngOnInit(): void {
    console.log(this.headerComponent);
    console.log(this.roomsService.getRooms());
    this.roomsService.getRooms().subscribe(rooms=>{
      this.roomList = rooms
    })

    this.roomsService.getPhotos().subscribe(event=>{
      switch (event.type) {
        case HttpEventType.Sent:{
          console.log('request has been made');
          break;
        }


        case HttpEventType.ResponseHeader:{
          console.log('request success');
          break;
        }


        case HttpEventType.DownloadProgress:{
          this.totalBytes = event.loaded;
          break;
        }

        case HttpEventType.Response:{
        console.log(event.body)
        }

      }
    })
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
      roomNumber: '4',
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
    // this.roomList = [...this.roomList, room];

    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    })

  }

  editRoom(){
    const room:RoomList = {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'AC, Free-Wifi, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://media.istockphoto.com/id/1208955086/photo/door-opened-to-bedroom.jpg?s=1024x1024&w=is&k=20&c=6t4VanNXaVaGcZatu9P1dBSJG1fa1NHeft9yZiFkIIc=',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.7
    }

    this.roomsService.editRoom(room).subscribe(data=>{
      this.roomList = data;
    })
  }

  deleteRoom(){
    this.roomsService.deleteRoom('3').subscribe((data)=>{
      this.roomList = data;
  })}
}
