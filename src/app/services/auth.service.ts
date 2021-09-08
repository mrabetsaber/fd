 import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
@NgModule({

})
export class AuthService {
  isLogedIn  = false;
  connecte:boolean = false;
  constructor(private router:Router,
    private angularAuth: AngularFireAuth) { }
  seConnecter(login, mdp){

    if (login == 'admin@gmail.com' && mdp == 'admin'){
      this.connecte = true;
      this.router.navigate(['listeProduits']);
    }
    else{
      alert("Login Incorrect");
      this.router.navigate(['']);
    }
  }
  async signIn(email: string, password: string){
    this.angularAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLogedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    });
  }
  async signUp(email: string, password: string){
    this.angularAuth.createUserWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLogedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    });
  }
  logout(){
    this.angularAuth.signOut()
    localStorage.removeItem('user')
  }
}
