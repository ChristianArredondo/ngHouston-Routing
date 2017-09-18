import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Ingredient {
  name: string;
  amount: number;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: Ingredient[];
  imgUrl: string;
}

export class RecipeService {
  updatedRecipes = new Subject <Recipe[]>();

  recipes: Recipe[] = [
    {
      id: 0,
      title: 'Spaghetti',
      description: 'The delicious Italian classic.',
      imgUrl: 'http://img.taste.com.au/ZfBKx8SH/taste/2016/11/beef-and-olive-spaghetti-bolognese-109377-1.jpeg',
      ingredients: [
        {
          name: 'Meat',
          amount: 5},
        {
          name: 'Sauce',
          amount: 1}
      ]
    },
    {
      id: 1,
      title: 'Sandwich',
      description: 'Just make one.',
      imgUrl: 'http://lifecdn.dailyburn.com/life/wp-content/uploads/2013/09/Michican-Cherry-Chicken-Salad.jpg',
      ingredients: [
        {
          name: 'Deli Meat',
          amount: 4,
        },
        {
          name: 'Bread',
          amount: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Krabby Patty',
      description: 'The one and only.',
      imgUrl: 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg',
      ingredients: [
        {
          name: 'Seaweed',
          amount: 2,
        },
        {
          name: 'Buns',
          amount: 2
        },
        {
          name: 'Ocean Beef',
          amount: 1
        }
      ]
    },
    {
      id: 3,
      title: 'Fried Squirrel',
      description: `The chicken of the trees.`,
      imgUrl: 'http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/6/2012/03/squirrel.jpg',
      ingredients: [
        {
          name: 'Squirrel',
          amount: 1,
        },
        {
          name: 'Rifle',
          amount: 1
        },
        {
          name: 'Bullets',
          amount: 1
        }
      ]
    }
  ];

  constructor() { }

  getRecipes () {
    return [...this.recipes];
  }

 updateRecipe (id: number, title: string, description: string) {
   this.recipes[id].title = title;
   this.recipes[id].description = description;
   this.updatedRecipes.next([...this.recipes]);
 }

}
