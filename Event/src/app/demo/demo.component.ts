import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <button (click) = "fun()">hello</button>
  {{name}}
  `
})
export class DemoComponent implements OnInit {
  
  name:string;
  fun()
  {
    this.name=" click";
  }

  constructor() { 
    this.name="";
  }

  ngOnInit(): void {
  }

}
