import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User, Users} from '../../user';
import { HttpService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'contacts-component',
  template: `<div class="container">
    <button class="btn btn-primary btn-lg btn-block mb-5" (click)="goAddComponent()">Add Contact</button>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="[user?._id]">{{user?.first_name}}</a>
      </li>
    </ul>
  </div>`
})
export class ContactsComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService, private router: Router ){}

  ngOnInit(){
    this.httpService.getUsers().subscribe((data: User[]) => this.users = data);
  }

  goAddComponent(){
    this.router.navigate(['/users', 'add']);
  }
}
