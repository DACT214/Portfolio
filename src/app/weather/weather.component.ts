import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


//conent to your weather service in the constructor and don't forget to import it too
  constructor(private weather:WeatherService) { }


// find the latitude and Longitude OnInit so you can use the varibles to concatinate the proper api address in your weather service
  ngOnInit(): void {
    this.weather.getLoco().subscribe(data=>{
      this.l1=data.lat;
      this.l2=data.lon;
//here we are going to lunch our temprature method right after our location methods
      this.loadTemp();
    })
  }

//long & Lat varibles
l1="";
l2="";

//temprature variables
farinhite=null;
celcius=null;

//here we are going to load our temprature in both farinhite and celcius so we can switch between the two later
//don't forget to include perameters cause thats how we are going to complete the concatination
loadTemp(){
  this.weather.getTemp(this.l1, this.l2).subscribe(data=>{
    //the math here is a conversion to make it farinhite, same for the celcius
    return this.farinhite=Math.round((parseInt(data.main.temp) - 273.15) * 9/5 + 32)
  })
  this.weather.getTemp(this.l1, this.l2).subscribe(data=>{
    return this.celcius=Math.round(parseInt(data.main.temp)-273.15)
  })
}

 
// 








  Test(){
    console.log(this.l1);
    console.log(this.l2);
    console.log(this.farinhite);
    console.log(this.celcius);
    console.log();
  }








}
