import { User } from './../../models/user';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {
  loginForm: FormGroup; 
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    if (this.authenticationService.currentUserValue){
      this.router.navigate(['/']);
    }
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }
  onSubmit(){
    const user=
    {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as User
    //console.warn(this.loginForm.value);
    this.authenticationService.login(user).subscribe( 
      (data) =>{
        console.warn(data);
        //this.router.navigate([this.returnUrl]);
        
      },
      error =>{
        console.warn('la connexion a échoué');
        
      }
      
    );
    
  }
}