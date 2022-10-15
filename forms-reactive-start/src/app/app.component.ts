import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['stable', 'critical', 'finished'];
  forbidenUsernames = ['Test'];

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required], this.forbidenNames.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'status': new FormControl('stable')
    })

    //this is for each value that is changed in the form
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    })

    //this is for the status of the form (valid/invalid/pending)
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    })

    this.signupForm.setValue({
      'projectData': {
        'projectName': 'Project name',
        'email': 'max@test.com'
      },
      'status': 'critical',
    })

  }
  onSubmit() {
    console.log(this.signupForm.value)
  }

  forbidenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "test@test.com") {
          resolve({ 'emailIsForbiden': true })
          if (this.forbidenUsernames.indexOf(control.value) != -1) {
            resolve({ 'nameIsForbiden': true })
          }
        } else resolve(null);
      }, 1500);
    });
    return promise;
  }

}
