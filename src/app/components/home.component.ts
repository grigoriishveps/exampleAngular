import { Component} from '@angular/core';
@Component({
  selector: 'home-app',
  template: `<div>
                    <p>Домашняя страница</p>
    <p>Количество кликов {{count}}</p>
    <button (click)="increase($event)">Click</button>
    <div>
      <h3>Обычный input</h3>
      <input [(ngModel)]="simpleInputValue" type="text" />
      <outcomp [text]="simpleInputValue"> </outcomp>
    </div>
    <div>
      <h3>Компонентный input</h3>
      <incomp [(text)]="componentInputValue"></incomp>
      <outcomp [text]="componentInputValue"> </outcomp>
    </div>
    <div>
      <h3>Проверка жизненного цикла компонента вывода</h3>
      <input [(ngModel)]="checkStateValue" type="text" />
      <outCompWithCheck [text]="checkStateValue"> </outCompWithCheck>
    </div>
    <div><p bold> Проверка Директивы</p></div>

    <div><p bold> Проверка компонента сервиса</p></div>
    <div><my-data-component></my-data-component></div>
    <div><my-data-component></my-data-component></div>
    <div><p bold> Проверка компонента сервиса</p></div>
    <div [style]="{width:'60%', display:'flex',justifyContent:'space-between', flex: '1 1 auto'}">
      <!--  <div [style]="{width:'70%'; display:flex;flex: 1 1 auto;}">-->
      <div>
        <h5> Форма из form</h5>
        <my-form></my-form></div>
      <div>
        <h5> Форма из FormGroup</h5>
        <my-reactive-form></my-reactive-form></div>
    </div>
    <div>
      <h5>Запрос данных пользователя</h5>
      <load-user></load-user>
    </div>
               </div>`
})
export class HomeComponent {

  constructor(){}
  simpleInputValue = '';
  componentInputValue = '';
  checkStateValue = '';
  count: number = 0;
  increase($event: any): void {
    this.count++;
    console.log($event);
  }
}
