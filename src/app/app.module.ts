import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';

import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component
  ],
  imports: [
    BrowserModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
