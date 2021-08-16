import {Component, Input} from '@angular/core';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
// Hierarchical injection, we don't want to overwrite the instance from AppComponent
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private accountsService: AccountsService) {
  }

  onSetTo(status: string): void {
    // replace eventEmitter with service
    this.accountsService.updateStatus(this.id, status);

    // replace console.log() with service
    // this.loggingService.logStatusChange(status);

    // emit the value for other subscribed components
    this.accountsService.statusUpdated.emit(status);
  }
}
