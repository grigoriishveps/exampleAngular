import { Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'my-data-component',
  template: `<div class="panel">
        <div><input [(ngModel)]="name" placeholder = "Модель" />
            <button (click)="addItem(name)">Добавить</button>
        </div>
        <table>
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </table>
    </div>`,
    // Если добавить то провайдер будет разный у всех созданных компонентов
  // providers: [DataService]
})
export class DataComponent{

  items: string[] = [];
  name: string;
  constructor(private dataService: DataService){}

  addItem(name: string){

    this.dataService.addData(name);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }
}
