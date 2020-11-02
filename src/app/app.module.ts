import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InputComponent} from './components/useless/InputComponent';
import {OutputComponent} from './components/useless/OutputComponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OutputComponentWithCheckState} from './components/useless/OutputComponentWithCheckState';
import {BoldDirective} from './directives/BoldDirective';
import {DataComponent} from './components/data.component';
import {MyFormComponent} from './components/useless/my-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {DataService} from './services/data.service';
import {LogService} from './services/log.service';
import {MyReactiveFormComponent} from './components/useless/my-reactive-form.component';
import {LoadUserComponent} from './components/load-user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/profile.component';
import {HomeComponent} from './components/home.component';
import {NotFoundComponent} from './components/not-found.component';
import {HttpService} from './services/user.service';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactProfileComponent} from './components/contacts/contact-profile.component';
import {AddContactComponent} from './components/contacts/add-contact.component';
import {ChangeContactComponent} from './components/contacts/change-contact.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: ContactsComponent , pathMatch:'full'},
  { path: 'users/add', component: AddContactComponent, pathMatch:'full'},
  // { path: 'users/:id', component: ContactProfileComponent , pathMatch:'full'},
  { path: 'users/:id', component: ChangeContactComponent , pathMatch:'full'},
  { path: 'users/:id/change', component: ChangeContactComponent , pathMatch:'full'},
  { path: 'about', component: ProfileComponent},
  { path: 'contact', redirectTo: '/about', pathMatch:'full'},
  // { path: 'contact/:id', redirectTo: '/about', pathMatch:'full'},
 // { path: '**', component: NotFoundComponent }
  //{ path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    OutputComponentWithCheckState,
    BoldDirective,
    DataComponent,
    MyFormComponent,
    MyReactiveFormComponent,
    LoadUserComponent,
    ProfileComponent,
    HomeComponent,
    NotFoundComponent,
    ContactsComponent,
    ContactProfileComponent,
    AddContactComponent,
    ChangeContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule, MatProgressSpinnerModule, MatSliderModule
  ],
  providers: [DataService, LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
