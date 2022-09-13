import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serevrContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serevrContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({serverName:nameInput.value, serevrContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({serverName:nameInput.value, serevrContent:this.serverContentInput.nativeElement.value})
  }

}
