import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Ingredient {
  name: string;
  amount: number;
}

export interface Recipe {
  title: string;
  description: string;
  ingredients: Ingredient[];
}

export class RecipeService {
  updatedRecipes = new Subject <Recipe[]>();

  recipes: Recipe[] = [
    {
      title: 'Spaghetti',
      description: 'The delicious Italian classic',
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
      title: 'Sandwich',
      description: 'Just make one.',
      ingredients: [
        {
          name: 'meat', 
          amount: 2},
        {
          name: 'bread', 
          amount: 2}
      ]
    }
  ]

  constructor() { }

  getRecipes () {
    return [...this.recipes];
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
