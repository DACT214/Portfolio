import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  week=[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];
  monthArr=["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  calendar = new Date();

    dateNow = this.calendar.getDate();
    weekDay = this.week[this.calendar.getDay()];
    month = this.monthArr[this.calendar.getMonth()];
    year = this.calendar.getFullYear();

  today = this.weekDay +", "+this.month +" "+ this.dateNow+", "+this.year;

  preMonth = new Date(this.year,this.calendar.getMonth(),0).getDate();

  lastDay = new Date(this.year,this.calendar.getMonth()+1,0).getDate();

  firstWeekDay = new Date(this.year,this.calendar.getMonth(),1).getDay();

  lastWeekDay = new Date(this.year,this.calendar.getMonth()+1,0).getDay();

  daysOfMonth:Number[]=[];

  preDaysOfMonth:Number[]=[];

  postDaysOfMonth:Number[]=[];


  









  ngOnInit(): void {

    console.log(this.preMonth)
    console.log(this.lastWeekDay)

//for all the days of the current month
    for(let x=1; x<=this.lastDay;x++){
      this.daysOfMonth[this.daysOfMonth.length]=x
    };
//filler last days of previous month
    for(let x=this.firstWeekDay-1, j= this.preMonth; x>=0 ; x--, --j){
    this.preDaysOfMonth[this.preDaysOfMonth.length]=j;
  };
  this.preDaysOfMonth.reverse();
//filler days for next month
    for(let x=this.lastWeekDay+1, j=1; x<=6 ; x++, j++){
      this.postDaysOfMonth[this.postDaysOfMonth.length]=j
    };
//style for the current day
    


}
}
