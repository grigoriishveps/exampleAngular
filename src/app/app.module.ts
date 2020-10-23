import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputComponent} from './components/InputComponent';
import {OutputComponent} from './components/OutputComponent';
import {FormsModule} from '@angular/forms';
import {OutputComponentWithCheckState} from './components/OutputComponentWithCheckState';
import {BoldDirective} from './directives/BoldDirective'

@NgModule({
  declarations: [
    AppComponent, InputComponent, OutputComponent, OutputComponentWithCheckState, BoldDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
