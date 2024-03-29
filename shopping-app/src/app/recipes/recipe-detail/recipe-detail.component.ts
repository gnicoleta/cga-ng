import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id : number;
  recipe : Recipe;
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      this.id = + params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  onAddShoppingList() {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients);
  }

  onEditRecipe() {
    //this.router.navigate(['edit'], {relativeTo:this.route})
    this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route})
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
