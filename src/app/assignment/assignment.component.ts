import {Component} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers: [UsersService]
})
export class AssignmentComponent {
}
