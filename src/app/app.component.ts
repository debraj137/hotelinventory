import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'hotelinventoryapp';
  role = 'Admin';
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  ngAfterViewInit(): void {
    // in ng12 it give error
    // const componentRef = this.vcr.createComponent(RoomsComponent);
     // Create the component factory for RoomsComponent
     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomsComponent);
     const componentRef = this.vcr.createComponent(componentFactory);
     componentRef.instance.numberOfRooms = 50;
  }
}
