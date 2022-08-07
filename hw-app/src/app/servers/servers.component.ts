import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {


  public name: string = "";
  public serverName: string = "Empty";
  serverCreated: boolean = false;
  serverStatus: string = "offline";

  servers = ['TestServer', 'TestSerevr2'];

  constructor() {
      this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  public onUpdateServerName(event: any) {
      this.name = (<HTMLInputElement>event.target).value;
  }

  public isDisabled() {
      return !this.serverName;
  }

  public onAddServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      //this.serverName = "";
  }

  getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
  }

  serevrStatusCheck() {
      return !!(this.serverStatus === 'online');
  }

}
