import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-component9',
  templateUrl: './component9.component.html',
  styleUrls: ['./component9.component.css']
})
export class Component9Component implements OnInit {
  users: string[];
  data: any[] = [];
  usersJSON: any;
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };
  editMode:boolean = false;

  constructor(public dataService: DataService) {
    this.users = this.dataService.getUsers();
    this.dataService.getData().subscribe(data => {
      this.data.push(data);
    });

    this.dataService.getUsersFromJSON().subscribe(users => {
      this.usersJSON = users;
    });
  }

  ngOnInit() {
  }

  onsubmit(editMode) {
    if (editMode) {
      this.dataService.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.usersJSON.length; i++) {
          if (this.usersJSON[i].id === this.user.id) {
            this.usersJSON.splice(i, 1);
          }
        }
        this.usersJSON.unshift(user);
      });
    } else {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.usersJSON.unshift(user);
      });
      this.usersJSON = '';
    }
  }

  onDelete(id) {
   this.dataService.deleteUser(id).subscribe(res => {
     for (let i = 0; i < this.usersJSON.length; i++) {
       if (this.usersJSON[i].id === id) {
         this.usersJSON.splice(i, 1);
       }
     }
   });
  }

  onEdit(user) {
    this.editMode = true;
    this.user = user;
  }
}
