import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {
   birthday = new Date(1980, 2, 4);
   total = 500;
   fee = 0.2;
  constructor() { }

  ngOnInit() {
  }

}
