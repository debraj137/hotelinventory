import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      // roomId:[''],
      roomId:new FormControl({value:2,disabled:true}),
      guestEmail:[''],
      checkinDate:[''],
      checkoutDate:[''],
      bookingStatus:[''],
      bookingAmount:[''],
      bookingDate:[''],
      mobileNumber:[''],
      guestName:[''],
      guestAddress:[''],
      guestCity:[''],
      guestState:[''],
      guestCountry:[''],
      guestZipCode:[''],
      guestCount:['']
    })
  }

  addBooking(){
    // console.log(this.bookingForm.value);
    //to get roomId use getRawValue
    console.log(this.bookingForm.getRawValue());
  }

}
