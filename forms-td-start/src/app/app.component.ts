import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm; //if you want to acces teh form earlier

  subscriptions = ['Basic','Advanced', 'Pro']

  user = {
    password:'',
    email:'',
    subscription:'',
    answer :'',
    gender:''

  }

  submitted = false;

  subscriptionDefault ='basic';

  onSubmit() {
    this.submitted = true;
    this.user.password = this.signupForm.value.userData.password;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.subscription;

    this.signupForm.reset(); //will clean everything, every field etc.
  }
}
