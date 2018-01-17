import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'sandbox2',
  template: `<h1>Hello {{ name }}</h1>`
})

export class Sandbox2Component {
  name: string = 'John Doe';
  age: number = 35;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumberArray: number[] = [1, 2, 3];
  myStringArray: string[] = ['a', 'b', 'c'];
  anyArray: any[] = [1, 2, 3, 'a', 'b', 'c'];
  myTuple: [string, number] = ['hello', 3];
  unusable: void = undefined;


  constructor() {
    this.hasChildren = false;
    this.city = 4;
  }
}
