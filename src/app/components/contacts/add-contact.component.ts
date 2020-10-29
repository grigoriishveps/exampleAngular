import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/user.service';
import {User} from '../../user';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';


@Component({
  selector:'add-contact-app',
  templateUrl:'add-contact.component.html'
})

export class AddContactComponent{
  contactReactiveForm: FormGroup;
  buttonMes: string;
  isAdd: boolean;
  closeResult = '';
  @ViewChild('content', {static: false})
  private modalComponent: ElementRef;
  private modalOpenRef: NgbModalRef;

  constructor(private http: HttpService, private router: Router, private modalService: NgbModal) {
    this.buttonMes = 'Send new contact';
    this.isAdd = true;
    this.contactReactiveForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl(''),
      age: new FormControl('', Validators.required),
      phone_number: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      sex: new FormControl('M')
    });
  }

  submit() {
    const value = this.contactReactiveForm.value;
    const user = new User(value);
    this.http.postUser(user).subscribe(() => {
        console.log('Success');
        this.openModal();
        },
        error => console.log(error)
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openModal() {
    this.modalOpenRef=this.modalService.open(this.modalComponent, {backdropClass: 'light-blue-backdrop'});
  }

  closeModal(){
    this.contactReactiveForm.reset({
      first_name: '',
      last_name: '',
      age: '',
      phone_number: '',
      address: '',
      email: '',
      sex: 'M'
    });
    this.modalOpenRef.close();
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
  goUserList(){
    this.modalOpenRef.close();
    this.router.navigate(['/users']);
  }
}
