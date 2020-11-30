import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!', 
        'https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_960_720.jpg',
        [
            new Ingredient('Meat', 1), 
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://cdn.pixabay.com/photo/2016/07/29/10/48/hamburger-1552436_960_720.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1) 
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}