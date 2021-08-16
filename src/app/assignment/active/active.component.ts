import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activeAccounts: string[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.activeAccounts = this.userService.activeAccounts;
  }

  onSetInactive(id: number): void {
    this.userService.setToInactive(id);
  }
}
