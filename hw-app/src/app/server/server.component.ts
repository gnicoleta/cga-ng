import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    public name : string = "";
    public serverName : string = "Empty";
    serverCreated : boolean = false;

    public onUpdateServerName(event : any) {
        this.name = (<HTMLInputElement>event.target).value;
    }

    public isDisabled() {
        return !this.serverName;
      }
    
      public onAddServer() {
        this.serverCreated = true;
        //this.serverName = "";
      }

}