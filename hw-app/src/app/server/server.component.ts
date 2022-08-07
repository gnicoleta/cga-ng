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
    public serverName: string = "Server_" +  Math.random();
    public serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    serevrStatusCheck() {
        return !!(this.serverStatus === 'online');
    }

}