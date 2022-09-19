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

  genders = ['male','female']

  defaultQuestion ='pet';
  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username:suggestedName
      }
    })

  }

  onSubmit() {
  }
}
