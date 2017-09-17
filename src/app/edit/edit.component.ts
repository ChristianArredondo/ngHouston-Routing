import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService, Recipe } from '../recipe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formGroup: FormGroup;
  recipe: Recipe;

  constructor(
    private _formBuilder: FormBuilder,
    private recipeService: RecipeService,
  ) {
    this.formGroup = this._initFormGroup()
  }

  ngOnInit() {
  }

  private _initFormGroup () {
    return this._formBuilder.group(<Partial<Recipe>>{
      title: '',
      description: ''
    })
  }

  private _setFormGroup () {
    this.formGroup.patchValue({
      // title: this.recipe.title
    })
  }

}
