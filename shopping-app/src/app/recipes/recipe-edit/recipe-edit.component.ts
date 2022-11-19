import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm:FormGroup;

  constructor(private route: ActivatedRoute, private recipeService:RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe.ingridients) {
        recipe.ingridients.forEach(ingridient => {
          recipeIngridients.push(new FormGroup({
            'name':new FormControl(ingridient.name, Validators.required),
            'amount':new FormControl(ingridient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
          }))
        });
      }

    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription, Validators.required),
      'ingridients' : recipeIngridients,
    });

  }

  onSubmit() {
    const newRecipe = this.recipeForm.value; //if the form has teh eaxct same structure as a recipe
    // const newRecipe = new Recipe(this.getFormValue("name"),
    // this.getFormValue("description"),
    // this.getFormValue("imagePath"),
    // this.getFormValue("ingridients"));
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  controls() { // a getter!
    //return (<FormArray>this.recipeForm.get('ingredients')).controls;
    
    return (<FormArray>this.recipeForm.get('ingridients')).controls;
  }

  onAddIngridient() {
    (<FormArray>this.recipeForm.get("ingridients")).push(new FormGroup( {
      'name' : new FormControl(null, Validators.required),
      'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }))
  }

  getFormValue(formName) {
    return this.recipeForm[formName].value;
  }

  onCancel() {
    this.router.navigate(['../', {relativeTo:this.route}]); //go up one level
  }

  onDeleteIngridient(index:number) {
    (<FormArray>this.recipeForm.get("ingridients")).removeAt(index);
  }

}
