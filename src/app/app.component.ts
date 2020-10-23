import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  simpleInputValue = '';
  componentInputValue = '';
  checkStateValue = '';
  count: number = 0;
  increase($event: any): void {
    this.count++;
    console.log($event);
  }
}
