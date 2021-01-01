import { Component, ErrorHandler, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {

  constructor() { }


  num1:number =  0;
  num2:number =  0;
  eqation:string = ""

  finalNum

  buttValue=false
  

  onSubmit(){
    this.buttValue=true
    console.log(this.eqation);
      if(this.eqation=="+"){
        this.finalNum=(this.num1 + this.num2)
      } else if(this.eqation=="-"){
        this.finalNum=(this.num1 - this.num2)
      } else if(this.eqation=="*"){
        this.finalNum=(this.num1 * this.num2)
      } else if(this.eqation=="/"){
        this.finalNum=(this.num1 / this.num2)
      } 
  }
  


  ngOnInit(): void {
    

  }

}
