import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aniket',
  template: `First Number:
  <br>
  <input type = "text"="firstNumber>
  <br>

  Second Number:
  <br>
  <input type = "text"="secondNumber>
  <br>
  sum is : <b>{{Result}}</b>

  <button (click)="fun()">Add</button>
  
  `
})
export class AniketComponent implements OnInit {
  
  A:string;
  C:string;
  D:number;
  fun()
  {
   this.D=parseInt(this.A)+parseInt(this.C);
  }
  constructor() 
  {
    this.A="";
    this.C="";
    this.D=0;
  }

  ngOnInit(): void {
  }

}
