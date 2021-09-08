import { AuthService } from './auth.service';
import { Injectable, NgModule } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({

})
export class AuthGuardGuard implements CanActivate {
  constructor(private f:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.f.connecte == true)
    {
      return true;

    }
  }
  
}
