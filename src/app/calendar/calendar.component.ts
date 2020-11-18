import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  week=[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
  monthArr=[
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  calendar = new Date()

  dateNow = this.calendar.getDate();
  weekDay = this.week[this.calendar.getDay()];
  month = this.monthArr[this.calendar.getMonth()];
  year = this.calendar.getFullYear();

  today = this.weekDay +", "+this.month +" "+ this.dateNow+", "+this.year



  









  ngOnInit(): void {



  }

}
