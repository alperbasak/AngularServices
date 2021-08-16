import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  inactiveAccounts: string[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.inactiveAccounts = this.userService.inactiveAccounts;
  }

  onSetActive(id: number): void {
    this.userService.setToActive(id);
  }
}
