import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("My recipe name", "Really delicious", "https://enlezzetlitarifler.net/wp-content/uploads/2019/12/Ana-Yemek-Tarifleri.jpeg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
