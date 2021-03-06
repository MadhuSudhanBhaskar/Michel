import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormWizardModule } from 'angular2-wizard';
import { WViewComponent } from './wview/wview.component';

@NgModule({
  declarations: [
    AppComponent,
    WViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
