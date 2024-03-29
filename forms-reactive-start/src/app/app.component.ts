import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbidenEmails),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]),
    })

    //this is for each value that is changed in the form
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    })

    //this is for the status of the form (valid/invalid/pending)
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    })

    //settign and pathcing values
    this.signupForm.setValue({
      'userData' : {
        'username':'Max',
        'email':'max@test.com'
      },
      'gender':'male',
      'hobbies':[]
    })
    
    //if you want to update only part of the form
    this.signupForm.patchValue({
      'userData' : {
        'username':'Max',
      }
    })

  }
  onSubmit() {
    //we already have the form, created above 
    this.signupForm.reset();
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

  forbidenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "test@test.com") {
          resolve({ 'emailIsForbiden': true })
        } else resolve(null);
      }, 1500);
    });
    return promise;
  }

}
