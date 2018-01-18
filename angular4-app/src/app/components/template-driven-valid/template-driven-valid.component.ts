import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-valid',
  templateUrl: './template-driven-valid.component.html',
  styleUrls: ['./template-driven-valid.component.css']
})
export class TemplateDrivenValidComponent implements OnInit {
  user = {
    name: '',
    email: '',
    phone: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
   if (valid) {
     console.log(value);
   } else {
     console.log('Form is invalid');
   }
  }

}
