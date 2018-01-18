import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  name:string = 'John Doe';
  showName:boolean = true;
  greeting:number = 88;

  constructor() { }

  ngOnInit() {
  }

}
