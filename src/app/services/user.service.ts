import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, Users} from '../user';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getUser(id: string) {

    return this.http.get(`http://localhost:3000/users/${id}` );
  }

  getUsers(page, pageCount) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageCount', pageCount.toString());
    // const params = new HttpParams();
    return this.http.get('http://localhost:3000/users',{params});
    // return this.http.get('./assets/user.json');
  }
//page={ this.state.page} lastPage={this.state.lastPage} choosePage={this.choosePage}
  postUser(user: User){
    //console.log(user);
    return this.http.post('http://localhost:3000/users', user);
  }

  updateUser(id: string, user: User){
      return this.http.patch(`http://localhost:3000/users/${id}`, user, );
  }

}
