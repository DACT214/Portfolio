import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  hi="";
  mess="";

  onSubmit(){

    

    console.log("subject: "+this.hi+" message: "+this.mess)

  }


  constructor() { }

  ngOnInit(): void {
    
  }



}
