import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TextInputComponent} from '../components/text-input/text-input.component';
import {TextSampleComponent} from '../components/text-sample/text-sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input'; 
import {InputFieldComponent} from '../components/input-field/input-field.component';
@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    TextSampleComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
