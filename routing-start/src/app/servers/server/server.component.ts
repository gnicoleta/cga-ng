import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  parasmSubscription : Subscription;
  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.server = {
        id:this.route.snapshot.params['id'],
        name:this.route.snapshot.params['name'],
        status:this.route.snapshot.params['status']
      }
  
      this.parasmSubscription = this.route.params.subscribe((params:Params) => {
        this.server.id = params['id'],
        this.server.name = params['name'],
        this.server.status = params['status']
  
      })
    }
  
    ngOnDestroy(): void {
      this.parasmSubscription.unsubscribe();
    }

}
