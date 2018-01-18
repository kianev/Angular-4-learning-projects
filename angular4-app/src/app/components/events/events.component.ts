import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 text:string = 'Hello World';
 text1:string = 'Hello World';
 value:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  fireEvent(e, greeting) {
    console.log(e.type);
  }

  changeValue() {
    // this.value = false;
    this.value = !this.value;
  }

  fireEventKey(e) {
    console.log(e.type);
  }

  changeText(e) {
   this.text1 = e.target.value;
  }
}
