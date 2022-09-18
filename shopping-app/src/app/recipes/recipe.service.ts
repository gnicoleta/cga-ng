import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService : ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe("Delicious Steak", "Beef", "https://img.taste.com.au/BI1PJu7n/taste/2016/11/paprika-beef-steaks-with-chimichurri-sauce-and-wedges-102931-1.jpeg",
            [new Ingridient("beef", 1), new Ingridient("salt", 1)]),
        new Recipe("Big Burger", "Beef", "https://st2.depositphotos.com/1692343/6719/i/450/depositphotos_67195703-stock-photo-grass-fed-bison-hamburger.jpg",
            [new Ingridient("buns", 4), new Ingridient("beef patty", 2)]),
        new Recipe("Cripsy Wings", "Chiken", "https://www.washingtonpost.com/resizer/3_BypBoqpG-SCfJ-tVbyugywwsY=/arc-anglerfish-washpost-prod-washpost/public/CZBD2IQRTEI6ZOWKQ2YUJ7EKFU.jpg",
            [new Ingridient("chiken wings", 6), new Ingridient("garlic sauce", 1), new Ingridient("apio", 3)])
    ];

    getRecipes() {
        return this.recipes.slice(); //by adding slice we wont get the actual array but a copy of it
    }
    
    getRecipe (index : number) {
        return this.recipes[index];
    }

    addIngridientsToShoppingList(ingridients : Ingridient[]) {
        this.slService.addIngridients(ingridients);
    }



}