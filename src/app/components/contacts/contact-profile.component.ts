import { Component, OnInit} from '@angular/core';
import {User} from '../../user';
import { ActivatedRoute} from '@angular/router';
import {HttpService} from '../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'contact-profile-app',
  template: `<div>
                    <p>Имя пользователя: {{user?.first_name}}</p>
<!--                    <p>Возраст пользователя: {{user?.age}}</p>-->
                    <a [routerLink]="['change']">To Change</a>
               </div>`
})
export class ContactProfileComponent implements OnInit {
  id: string;
  user: User;
  private subscription: Subscription ;
  constructor(private http: HttpService, private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(){
    this.http.getUser(this.id).subscribe((data: User) => this.user = data);
  }
}
