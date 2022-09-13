import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  @Output() ingridientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddItem() {
    const ingridientName = this.nameInputRef.nativeElement.value;
    const ingridientAmount = this.amountInputRef.nativeElement.value;;
    const newIngridient = new Ingridient(ingridientName, ingridientAmount);
    this.ingridientAdded.emit(newIngridient);

  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
