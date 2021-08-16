import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
// 1- Add the service as provider
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // 2 - Dependency injection of the service
  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
