import { Component } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  recipes: Recipe[];
  recipeControl: FormControl = new FormControl();
  id: number;

  constructor(
    private _recipeService: RecipeService,
  ) {
    this.recipes = this._recipeService.getRecipes();
    this.recipeControl.valueChanges
      .subscribe(id => {
        this.id = id;
        console.log(id);
      });
  }

}
