import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private router: Router){}
  goHome(){
    this.router.navigate(['']);
  }
  // this.router.navigate(
  //   ['/item', myItem.id],
  //   {
  //     queryParams:{
  //       'product': myItem.product,
  //       'price': myItem.price
  //     }
  //   }
  // );
}
