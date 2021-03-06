import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/user.service';
import {User} from '../../user';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbDateAdapter, NgbDateNativeAdapter, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'change-contact-app',
  styleUrls: ['contact.component.css'],
  templateUrl: 'add-contact.component.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})

export class ChangeContactComponent{
  contactReactiveForm: FormGroup;
  buttonMes: string;
  id: string;
  isAdd: boolean;
  private subscription: Subscription ;
  closeResult = '';
  @ViewChild('content', {static: false})
  private modalComponent: ElementRef;
  private modalOpenRef: NgbModalRef;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute, private modalService: NgbModal) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    this.buttonMes = 'Update contact';
    this.isAdd = false;
    this.contactReactiveForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl(''),
      date_birth: new FormControl('',  Validators.required),
      phone_number: new FormControl('', Validators.pattern("[0-9]{10}")),
      address: new FormControl(''),
      email: new FormControl('',[ Validators.required, Validators.email]),
      sex: new FormControl('M')
    });
  }

  ngOnInit(){
    this.http.getUser(this.id).subscribe((data: User) => {
      this.contactReactiveForm.patchValue({...data, date_birth: new Date(data.date_birth)});
    },error => console.log(error));
  }

  submit() {
    const value = this.contactReactiveForm.value;
    const user = new User(value);
    this.http.updateUser(this.id, user).subscribe(() => {
      console.log('Changed');
      this.openModal();
    }, error => console.log(error));
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModal() {
    this.modalOpenRef = this.modalService.open(this.modalComponent, {backdropClass: 'light-blue-backdrop'});
  }

  closeModal(){
    this.modalOpenRef.close();
  }

  today(){
    this.contactReactiveForm.patchValue({date_birth : new Date()});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
