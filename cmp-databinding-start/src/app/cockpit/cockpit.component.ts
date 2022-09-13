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

  onAddServer(nameInput) {
    this.serverCreated.emit({serverName:nameInput.value, serevrContent:this.newServerContent})
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({serverName:nameInput.value, serevrContent:this.newServerContent})
  }

}
