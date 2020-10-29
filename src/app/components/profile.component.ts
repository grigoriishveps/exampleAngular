import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'profile-app',
  template: `<div>
                    <h4>About</h4>
<!--                    <p>Имя пользователя: {{user?.name}}</p>-->
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('./assets/user.json').subscribe((data:User) => this.user=data);
  }
}
