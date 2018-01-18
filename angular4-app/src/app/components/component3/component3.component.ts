import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  people = ['John', 'Rick', 'Mick'];
  people2 = [
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Rick',
      lastName: 'Doe'
    },
    {
      firstName: 'Mick',
      lastName: 'Doe'
    }
  ];

  constructor() {
    this.people[2] = 'Smith';
  }

  ngOnInit() {
  }

}
