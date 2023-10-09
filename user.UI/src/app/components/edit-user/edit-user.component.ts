import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  @Input() user?: User;
  @Output() usersUpdated = new EventEmitter<User[]>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  updateHero(user: User) {
    this.userService
      .updateUser(user)
      .subscribe((users: User[]) => this.usersUpdated.emit(users));
  }

  deleteHero(user: User) {
    this.userService
      .deleteHero(user)
      .subscribe((users: User[]) => this.usersUpdated.emit(users));
  }

  createHero(user: User) {
    this.userService
      .createUser(user)
      .subscribe((users: User[]) => this.usersUpdated.emit(users));
  }
}
