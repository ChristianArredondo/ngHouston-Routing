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
      description: 'The delicious Italian classic',
      imgUrl: 'http://img.taste.com.au/ZfBKx8SH/taste/2016/11/beef-and-olive-spaghetti-bolognese-109377-1.jpeg',
      ingredients: [
        {
          name: 'meat', 
          amount: 5},
        {
          name: 'sauce', 
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
    }
  ]

  constructor() { }

  getRecipes () {
    return [...this.recipes];
 }

 updateRecipe (id: number, title: string, description: string) {
   this.recipes[id].title = title;
   this.recipes[id].description = description;
   this.updatedRecipes.next([...this.recipes])
 }

//   addPost (post: Post) {
//     this.posts.push(post);
//     this.updatedPosts.next(this.posts.slice());
//   }

//   getNewId () {
//     return this.posts.length;
//   }

//   addComment (id: number, body: string) {
//     const newComment = {
//       comment_id: this.posts[id].comments.length,
//       user: this.christian,
//       postDate: '09/15/17,',
//       commentBody: body,
//       votes: 0,
//     };
//     this.posts[id].comments.push(newComment);
//     console.log(this.posts);
//     // this.updatedPosts.next(this.posts.slice());
//   }

}
