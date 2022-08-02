import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgmnt2',
  templateUrl: './asgmnt2.component.html',
  styleUrls: ['./asgmnt2.component.css']
})
export class Asgmnt2Component implements OnInit {
  
  public userName : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  public isDisabled() {
    return !this.userName;
  }

  public onAddUser() {
    this.userName = "";
  }

}
