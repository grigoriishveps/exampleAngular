import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User, Users, UsersPage} from '../../user';
import { HttpService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'contacts-component',
  template: `<div class="container">
    <button class="btn btn-primary btn-lg btn-block mb-5" (click)="goAddComponent()">Add Contact</button>
<!--    <ul>-->
<!--      <li *ngFor="let user of users">-->
<!--        <a [routerLink]="[user?._id]">{{user?.first_name}}</a>-->
<!--      </li>-->
<!--    </ul>-->
    <table class="table table-hover">
      <thead class="thead-dark">
      <tr>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Date of birth</th>
        <th scope="col">Phone</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users" (click)="toContact(user._id)">
          <th scope="row">{{user.first_name}}</th>
          <td>{{user.last_name}}</td>
          <td>{{user.date_birth}}</td>
          <td>{{formatNumber(user.phone_number)}}</td>
        </tr>
      </tbody>
    </table>

    <ngb-pagination class='d-flex justify-content-center'
                    [(page)]="page"
                    [collectionSize]='total'
                    [maxSize]="pageSize"
                    [rotate]="true"
                    (pageChange)="changePage($event)">
    </ngb-pagination>
  </div>`
})
export class ContactsComponent implements OnInit {
  users: User[] = [];
  page: number;
  total: number;
  pageSize: number;
  constructor(private httpService: HttpService, private router: Router ){
    this.pageSize = 10;
    this.page = 1;
  }

  ngOnInit(){
    this.httpService.getUsers(0, this.pageSize).subscribe((data: UsersPage) => {
      this.users = data.users;
      this.total = data.total;
    })
  };

  goAddComponent(){
    this.router.navigate(['/users', 'add']);
  }

  toContact(id){
    this.router.navigate(['/users', id]);
  }

  changePage(page: number){
    const new_page = this.page - 1;
    this.httpService.getUsers(new_page, this.pageSize).subscribe((data: UsersPage) => {
      this.users = data.users;
      this.total = data.total;
    })
  }
  formatNumber(phone: string){
    return phone? `+7-${phone.substr(0,3)}-${phone.substr(3,3)}-${phone.substr(6,2)}-${phone.substr(8,2)}`: '';
  }
}
