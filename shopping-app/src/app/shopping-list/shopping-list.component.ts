import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingridients: Ingridient[];
  ingridientsChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnDestroy(): void {
    this.ingridientsChangedSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();
    this.ingridientsChangedSubscription = this.shoppingListService.ingridientsChanged.subscribe((ingridients: Ingridient[]) => {
      this.ingridients = ingridients;
    })
  }

  onEditItem(index : number) { debugger
    this.shoppingListService.startedEditing.next(index);
  }


}
