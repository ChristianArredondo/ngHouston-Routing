import { Component } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  recipe: Recipe;
  recipes: Recipe[];
  id: number;

  constructor(
    private recipeService: RecipeService,
  ) {
    this.id = 0;
    this.recipes = this.recipeService.getRecipes();
    this.recipe = this.recipes[this.id];
    console.log(this.recipe);
  }

  onNext () {

  }

}
