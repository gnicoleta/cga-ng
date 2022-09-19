import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbidenUsernames = ['chris', 'anna'];

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbidenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]),
    })
  }
  onSubmit() {
    //we already have the form, created above 
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //fix for fail as of the latest Angular version
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbidenNames(control:FormControl) : {[s:string] : boolean} {
    if(this.forbidenUsernames.indexOf(control.value) != -1) {
      return {nameIsForbiden : true};
    }
    return null; //!!! if valdaition is successful, you have to pass nothing or null
  }

}
