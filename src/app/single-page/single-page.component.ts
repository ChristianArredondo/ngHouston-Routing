import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
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
  editMode = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _recipeService: RecipeService
  ) {
    this.recipes = this._recipeService.getRecipes();
    this._recipeService.updatedRecipes
      .subscribe(recipes => this.recipes = recipes);
    this.formGroup = this._initFormGroup()
  }

  ngOnInit() {
    this.recipeControl.valueChanges
    .subscribe(id => {
      this.id = id;
      this.recipe = this.recipes[id];
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
      title: this.recipe.title,
      description: this.recipe.description
    })
  }

  fetchRecipe (id: number) {
    return this._recipeService.getRecipes()[this.id];
  }

  onEdit () {
    this._setFormGroup();
    this.editMode = !this.editMode;
  }

  onCancel () {
    this.editMode = false;
  }

  onSave () {
    const updatedTitle = this.formGroup.get('title').value;
    const updatedDesc = this.formGroup.get('description').value;
    this._recipeService.updateRecipe(this.id, updatedTitle, updatedDesc);
    this.editMode = false;
  }

}
