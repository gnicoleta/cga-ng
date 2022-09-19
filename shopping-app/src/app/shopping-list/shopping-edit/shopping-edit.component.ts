import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAddItem() {
    const ingridientName = this.nameInputRef.nativeElement.value;
    const ingridientAmount = this.amountInputRef.nativeElement.value;;
    const newIngridient = new Ingridient(ingridientName, ingridientAmount);
    this.shoppingListService.addIngridient(newIngridient);
  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
