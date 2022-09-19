import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm; //if you want to acces teh form earlier
  
  answer = "";

  defaultQuestion ='pet';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
  }
}
