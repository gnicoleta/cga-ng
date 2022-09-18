import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators';

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
        if (count == 2) {
          observer.complete(); //it's done
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!')); //an error cancels the observable
        }
        count++;
      }, 1000)
    });

    
    customObservale.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    this.customObservaleSubscription = customObservale.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data) => {
      console.log("###: " + data);
    },
      (error) => {
        alert(error.message);
      },
      () => {
        console.log("Completed");
      })
  }

}
