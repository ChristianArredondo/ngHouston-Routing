import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  recipes;

  constructor(
    private recipeService: RecipeService
  ) {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

  ngOnInit() {
  }

}
