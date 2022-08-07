import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online {
        color:white;
    }`]
})
export class ServerComponent {

    public name: string = "";
    public serverName: string = "Empty";
    serverCreated: boolean = false;
    serverStatus: string = "offline";

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
        //this.serverName = "";
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    serevrStatusCheck() {
        return !!(this.serverStatus === 'online');
    }

}