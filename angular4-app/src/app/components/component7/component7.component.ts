import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {
  isSpecial = true;
  canSave = true;
  currentStyles = {};
  constructor() {
    this.setCurrentStyles();
  }

  ngOnInit() {
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }
}
