import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  SeConnecter(login,mdp){
    this.authService.seConnecter(login, mdp)
  }
}
