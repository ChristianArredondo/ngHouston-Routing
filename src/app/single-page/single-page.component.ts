import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from "../recipe.service";
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  formGroup: FormGroup;
  recipeControl: FormControl = new FormControl();
  recipes: Recipe[];
  recipe: Recipe;
  id: number;

  constructor(
    private _formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {
    this.recipes = this.recipeService.getRecipes();
    this.formGroup = this._initFormGroup()
  }

  ngOnInit() {
    this.recipeControl.valueChanges
    .subscribe(id => {
      console.log(id);
      this.id = id;
      this.recipe = this.fetchRecipe(id);
    });
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

  fetchRecipe (id) {
    return this.recipeService.getRecipes()[this.id];
  }

}
