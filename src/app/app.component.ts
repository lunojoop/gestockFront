import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestock1';
  currentUser: User;

constructor(
  private router: Router,
  private authenticationService: AuthenticationService
  ) {
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  
  logout() 
  {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
  }
  
}
