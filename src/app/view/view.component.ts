import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
  ) {
    this.id = 0;
    this.recipe = this.recipeService.getRecipes()[this.id];
    console.log(this.recipe);
  }

  ngOnInit() {
  }

}
