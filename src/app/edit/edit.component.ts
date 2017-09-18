import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService, Recipe } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this._initFormGroup();
  }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipes()[params.id];
      this._setFormGroup();
    });
  }

  private _initFormGroup () {
    return this._formBuilder.group(<Partial<Recipe>>{
      title: '',
      description: ''
    });
  }

  private _setFormGroup () {
    this.formGroup.patchValue(this.recipe);
  }

  onSave () {
    this.recipeService.updateRecipe(this.recipe.id, this.formGroup.value.title, this.formGroup.value.description);
    this.router.navigate(['/recipes', this.recipe.id]);
  }

}
