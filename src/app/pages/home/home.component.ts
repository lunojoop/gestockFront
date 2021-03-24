import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users = [];

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) { 

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }
  ngOnInit() {
    this.loadAllUsers();
}
private loadAllUsers() {
  this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
}

  logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
  }
}
