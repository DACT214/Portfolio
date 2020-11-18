
import { Component } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLoading=true;

  constructor(private router:Router){

    this.router.events.subscribe( (routerEvent: Event) => {

      if(routerEvent instanceof NavigationStart){
        this.showLoading=true;
      }

      if(routerEvent instanceof NavigationEnd) {
        this.showLoading=false;
      }
    }  )


  }
  
}
