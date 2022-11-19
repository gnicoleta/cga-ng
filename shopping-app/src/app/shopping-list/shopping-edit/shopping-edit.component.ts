import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  itemEdititingSubscription: Subscription;
  editMode = false;
  editedItemInex: number;
  editedItem: Ingridient;
  @ViewChild('f') slForm: NgForm;

  ngOnInit(): void {
    this.itemEdititingSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemInex = index;
      this.editedItem = this.shoppingListService.getIngridient(index);
      this.slForm.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount

      })

    });
  }

  ngOnDestroy(): void {
    this.itemEdititingSubscription.unsubscribe();
  }


  onSubmitItem(formData: NgForm) {
    const value = formData.value;
    const newIngridient = new Ingridient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngridient(this.editedItemInex, newIngridient);
    } else {
      this.shoppingListService.addIngridient(newIngridient);
    }
    this.editMode = false;
    this.slForm.reset();


  }

  onDeleteItem() {
    this.shoppingListService.deleteIngridient(this.editedItemInex);
    this.onClearItem();

  }

  onClearItem() {
    this.editMode = false;
    this.slForm.reset();
  }

}
