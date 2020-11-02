import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';

@Component({
  selector: 'load-user',
  template: `<div>
                    <p>Имя пользователя: {{user?.first_name}}</p>
<!--                    <p>Возраст пользователя: {{user?.age}}</p>-->
               </div>`
})
export class LoadUserComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('./assets/user.json').subscribe((data:User) => this.user=data);
  }
}
