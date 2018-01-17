import { Component } from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'object1',
  template: `<h1>Object Component</h1>`
})

export class ObjectComponent {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com'
    };
    this.customers = [
      {  id: 1,
        name: 'John Doe',
        email: 'john@email.com'
      },
      {  id: 2,
        name: 'John Smith',
        email: 'john@email.com'
      },
      {  id: 3,
        name: 'John Jonny',
        email: 'john@email.com'
      },
    ];
  }
}


