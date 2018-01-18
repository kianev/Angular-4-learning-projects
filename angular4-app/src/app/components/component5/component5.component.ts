import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {
  imageUrl:string = 'http://lorempixel.com/400/200';
  isUnchanged: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
