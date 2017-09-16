import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient, RecipeService } from "../recipe.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

  ngOnInit() {
  }

}
