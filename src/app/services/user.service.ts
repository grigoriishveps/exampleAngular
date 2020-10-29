import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, Users} from '../user';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getUser(id: string){
    // const params = new HttpParams().set('id', id.toString());
    return this.http.get(`http://localhost:3000/users/${id}`);
    // return this.http.get('./assets/user.json').pipe(map(data=>{
    //   let users = data['users'];
    //   let result = users.find(userId => userId.id== id);
    //   // console.log(result);
    //   return result;
    // }));
  }

  getUsers() {
    // const params = new HttpParams();
    return this.http.get('http://localhost:3000/users');
    // return this.http.get('./assets/user.json');
  }

  postUser(user: User){
    const user1: User = new User({address: "",
      age: "123",
      email: "sdfsd@wsdgdfg",
      first_name: "dsdgfsdf",
      last_name: "sdfsdfsd",
      phone_number: "12312312312",
      sex: "W"});
    //console.log(user);
    return this.http.post('http://localhost:3000/users', user);
  }

  updateUser(id: string, user: User){
      return this.http.patch(`http://localhost:3000/users/${id}`, user);
  }

}
