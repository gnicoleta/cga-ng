import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styles: [`.colorEntry {
    color: white;
    }`]
})
export class Assigment3Component implements OnInit {

  public showDetails: boolean = false;

  public detailsHistoryArr = ["Test"];

  constructor() { }

  ngOnInit(): void {
  }

  public onDisplay() {
    this.showDetails = !this.showDetails;
    this.detailsHistoryArr.push(this.showDetails + " - " + new Date())
  }

  getColorEntry(index) {
    return !!(index >= 5);
  }

}
