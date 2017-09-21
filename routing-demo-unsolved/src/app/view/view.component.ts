import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

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
    private route: ActivatedRoute
  ) {
    this.id = 0;
    this.recipe = this.recipeService.getRecipes()[this.id];
    console.log(this.recipe);
    this.route.params
      .subscribe((params: Params) => {
        this.recipe = this.recipeService.getRecipes()[params.id];
      });
  }

  ngOnInit() {
  }

}
