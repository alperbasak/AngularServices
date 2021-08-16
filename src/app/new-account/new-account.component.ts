import {Component} from '@angular/core';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
// 1- Add the service as provider
export class NewAccountComponent {

  // 2 - Dependency injection of the service
  constructor(private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
