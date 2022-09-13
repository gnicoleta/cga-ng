import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Steak", "Beef", "https://img.taste.com.au/BI1PJu7n/taste/2016/11/paprika-beef-steaks-with-chimichurri-sauce-and-wedges-102931-1.jpeg"),
    new Recipe("Steak", "Beef", "https://img.taste.com.au/BI1PJu7n/taste/2016/11/paprika-beef-steaks-with-chimichurri-sauce-and-wedges-102931-1.jpeg"),
    new Recipe("Steak", "Beef", "https://img.taste.com.au/BI1PJu7n/taste/2016/11/paprika-beef-steaks-with-chimichurri-sauce-and-wedges-102931-1.jpeg")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
