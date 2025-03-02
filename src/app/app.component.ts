import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ){
    console.log("this.initService.config: ",this.initService.config);
  }
  ngOnInit(): void {
    // this.router.events.subscribe(event=>console.log(event));
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started');
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Navigation Completed');
      });
    this.name.nativeElement.innerText = 'Hilton Hotel';
    this.loggerService.log('AppComponent.ngOnInit()');
    this.localStorage.setItem('name','Hilton Hotel')
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
