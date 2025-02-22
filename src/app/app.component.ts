import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'hotelinventoryapp';
  role = 'Admin';
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name',{static:true}) name!: ElementRef

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotel'
  }

  // ngAfterViewInit(): void {
  //   // in ng12 it give error
  //   // const componentRef = this.vcr.createComponent(RoomsComponent);
  //    // Create the component factory for RoomsComponent for ng12
  //    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomsComponent);
  //    const componentRef = this.vcr.createComponent(componentFactory);
  //    componentRef.instance.numberOfRooms = 50;
  // }
}
