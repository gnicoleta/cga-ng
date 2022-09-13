import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serevrContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serevrContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName, serevrContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName, serevrContent:this.newServerContent})
  }

}
