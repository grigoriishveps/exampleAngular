import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-reactive-form',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
  `],
  template: `<form [formGroup]="myReactiveForm" novalidate (ngSubmit)="submit()">
    <div class="form-group">
      <label>Имя</label>
      <input class="form-control" name="name" formControlName="userName" />

      <div class="alert alert-danger"
           *ngIf="myReactiveForm.controls['userName'].invalid && myReactiveForm.controls['userName'].touched">
        Не указано имя
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" name="email" formControlName="userEmail" />

      <div class="alert alert-danger"
           *ngIf="myReactiveForm.controls['userEmail'].invalid && myReactiveForm.controls['userEmail'].touched">
        Некорректный email
      </div>
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input class="form-control" name="phone" formControlName="userPhone" />
      <div class="alert alert-danger"
           *ngIf="myReactiveForm.controls['userPhone'].invalid && myReactiveForm.controls['userPhone'].touched">
        Некорректный номер телефона
      </div>
    </div>
    <div formArrayName="phones">
      <div class="form-group" *ngFor="let phone of myReactiveForm.controls['phones']['controls']; let i = index">
        <label>Телефон</label>
        <input class="form-control" formControlName="{{i}}" />
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="addPhone()">
        Добавить телефон
      </button>
      <button class="btn btn-default" [disabled]="myReactiveForm.invalid">
        Отправить
      </button>
    </div>
  </form>`
})
export class MyReactiveFormComponent {

  myReactiveForm: FormGroup;
  constructor(){
    this.myReactiveForm = new FormGroup({

      "userName": new FormControl("Tom", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPhone": new FormControl("", Validators.pattern('[0-9]{10}')),
      "phones": new FormArray([new FormControl("+7", Validators.required)])
    });
  }
  addPhone(){
    (<FormArray>this.myReactiveForm.controls["phones"]).push(new FormControl("+7", Validators.required));
  }
  submit(){
    console.log(this.myReactiveForm);
  }
}
