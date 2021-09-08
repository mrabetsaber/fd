import { HomeClientComponent } from './home-client/home-client.component';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { ClientComponent } from './client/client.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path: '',component:ClientComponent},
  {path: 'auth',component:AuthComponent},
  {path: 'ajouterProduits',component:AjouterProduitComponent, canActivate: [AuthGuardGuard]},
  {path: 'home/:id',component:DetailProduitComponent},
  {path: 'edit/:id',component:ModifierProduitComponent,canActivate:[AuthGuardGuard]},
  {path: 'listeProduits',component:ListeProduitComponent},
  {path: 'commande/:id',component:CommandeComponent},
  {path: 'details/:id',component:DetailProduitComponent},
  {path: 'login',component:LoginComponent},
  {path: 'homeClient',component:HomeClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
