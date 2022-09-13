import { createContentChild } from '@angular/compiler/src/core';
import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element : { type: string, name: string, content:string};
  //@ContentChild('contentParagraph', {static: false}) paragraph : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
