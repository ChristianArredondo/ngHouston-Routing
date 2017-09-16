import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdAutocompleteModule,
  MdToolbarModule
} from '@angular/material';

import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
