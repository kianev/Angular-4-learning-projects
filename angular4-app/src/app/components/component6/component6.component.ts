import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {
  isSpecial = true;
  canSave = true;
  currentClasses = {};
  constructor() {
    this.setCurrentClasses();
  }

  ngOnInit() {
  }

  setCurrentClasses() {
    this.currentClasses = {
      special: this.isSpecial,
      savable: this.canSave
    };
  }

}
