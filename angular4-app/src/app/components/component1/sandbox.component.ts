import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'sandbox',
  template: `<h1>{{ name }} is {{ age }} years old</h1> 
  <h2>My name is {{ person.firstName }} {{ person.lastName }}</h2>
  <ul>
    <li>{{ 'Hello World' }}</li>
    <li>{{ 1 + 1 }}</li>
    <li>{{ showAge() }}</li>
  </ul>`
})

export class SandboxComponent {
  // creating a class property
  name = 'John Smith';
  age = 35;
  person = {firstName: 'Steve', lastName: 'Balmer'};

  // creating a constructor run first
  constructor() {
    console.log('constructor run');
    // this.age = 40;
    this.hasBirthday();
    this.hasBirthday();
  }

  // creating a method
  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }
}
