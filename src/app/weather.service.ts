import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //there are 2 api that I need to connect to so, I made 2 HttpClient variables: wHttp & lHttp
  constructor(private wHttp:HttpClient, private lHttp:HttpClient) {}

  //here I use the location finder api to grab location base data
  getLoco():Observable<any>{
    let loco= 'http://ip-api.com/json/';
    return this.lHttp.get<any>(loco);
  }


  getTemp(lat,lon): Observable<any>{
   
    let wet= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=d5093de4bbd6bc299288add9c46021e4';

    return this.wHttp.get<any>(wet);

  }
} 