import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignIn = false;
  constructor(private firebaseService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
      this.isSignIn = true;
    else
      this.isSignIn = false;
  }
  async signin(email:string, password: string){
    console.log(password);
    console.log(email);
      await  this.firebaseService.signIn(email, password)
      if(this.firebaseService.isLogedIn){
        this.isSignIn = true;
        this.router.navigate(['/homeClient'])
        console.log(email);
        console.log(password);
      }
  }
  async signup(email:string, password: string){
    console.log(email);
    console.log(password);
    await  this.firebaseService.signUp(email, password)
    if(this.firebaseService.isLogedIn){
      this.isSignIn = true;
      this.router.navigate(['/homeClient'])
    }

}

}
