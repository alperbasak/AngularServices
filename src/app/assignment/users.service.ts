import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  activeAccounts = ['Chris', 'Manu'];
  inactiveAccounts = ['Max', 'Anna'];

  constructor(private counterService: CounterService) {
  }

  setToActive(id: number): void {
    this.activeAccounts.push(this.inactiveAccounts[id]);
    this.inactiveAccounts.splice(id, 1);
    this.counterService.increaseToActiveCounter();
  }

  setToInactive(id: number): void {
    this.inactiveAccounts.push(this.activeAccounts[id]);
    this.activeAccounts.splice(id, 1);
    this.counterService.increaseToInactiveCounter();
  }

}
