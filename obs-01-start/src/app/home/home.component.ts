import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  private customObservaleSubscription: Subscription;

  ngOnDestroy(): void {
    this.customObservaleSubscription.unsubscribe()
  }

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => { })
    const customObservale = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    this.customObservaleSubscription = customObservale.subscribe((datra) => {
      console.log("###: " + datra);
    })
  }

}
