import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests(){
   return this.bookingForm.get('guests') as FormArray
  }
  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      // roomId:[''],
      roomId:new FormControl({value:2,disabled:true},{ validators: [Validators.required] }),
      guestEmail:['',{
       // updateOn: 'blur',
        validators: [Validators.required, Validators.email],},],
      checkinDate:[''],
      checkoutDate:[''],
      bookingStatus:[''],
      bookingAmount:[''],
      bookingDate:[''],
      mobileNumber:[''],
      guestName:['', [
        Validators.required,
        Validators.minLength(5),
        //CustomValidator.ValidateName,
       // CustomValidator.ValidateSpecialChar('*'),
      ],],
      address: this.fb.group({
        addressLine1:['',{ validators: [Validators.required] }],
        addressLine2:[''],
        city:['',{ validators: [Validators.required] }],
        state:['',{ validators: [Validators.required] }],
        country:[''],
        zipCode:[''],
      }),
      guests:this.fb.array([
        // this.fb.group({guestName: [''], age: new FormControl('')})
        this.addGuestControl()
      ]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    })

    this.getBookingData();
  }

  addBooking(){
    // console.log(this.bookingForm.value);
    //to get roomId use getRawValue
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-Feb-2020'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  addGuest(){
    this.guests.push(
      this.addGuestControl()
    )
  }

  addGuestControl(){
    return this.fb.group({guestName: ['', { validators: [Validators.required] }], age: new FormControl('')})
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }
  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

}
