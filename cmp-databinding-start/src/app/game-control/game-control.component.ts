import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  lastNumebr = 0;
  @Output() intervalFired = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumebr + 1);
      this.lastNumebr++;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.interval);
  }

}
