import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';

import { SelectComponent } from './select/select.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { RecipeService } from './recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdSelectModule,
    MdToolbarModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
