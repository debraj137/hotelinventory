import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id:number = 0;
  id$: Observable<number> = this.router.params.pipe(
    map(params=>params['roomId'])
  );;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.params.subscribe((data)=>{
    //   console.log('activatedRoute data: ',data);
    //   this.id = data['roomId']
    // }))

       console.log(this.router.paramMap.subscribe((params)=>{
      params.get('roomId');
    }))

    //it will work for different view, i.e, it will not work in case of child route because data
    //will not get updated
    // this.id = this.router.snapshot.params['roomId'];
  }

}
