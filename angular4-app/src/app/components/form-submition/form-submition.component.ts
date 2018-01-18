import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-submition',
  templateUrl: './form-submition.component.html',
  styleUrls: ['./form-submition.component.css']
})
export class FormSubmitionComponent implements OnInit {
  name:string = '';
  users:string[] = ['John Doe', 'Merry Smith', 'Gosho Peshev'];
  constructor() { }

  ngOnInit() {
  }

  onSumbit() {
   this.users.push(this.name);
   this.name = '';
  }
}
