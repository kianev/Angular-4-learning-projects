import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  users: string[];
  data: Observable<number>;
  constructor(public httpClient: HttpClient) {
    this.users = ['John', 'Mark', 'Merry', 'Pesho'];
  }
  getUsers() {
    return this.users;
  }

  getData() {
    this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.data;
  }

  getUsersFromJSON() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res);
  }

  addUser(user) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', user)
      .map(res => res);
  }

  deleteUser(id) {
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }

  updateUser(user) {
    return this.httpClient.put('https://jsonplaceholder.typicode.com/users/' + user.id, user);
  }
}
