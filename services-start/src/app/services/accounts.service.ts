import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
      constructor(private loggingService:LoggingService){}

      accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount( name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange('Added new ');
      }
    
      updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
      }
}