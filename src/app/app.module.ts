import { CommandeServiceService } from './services/commande-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitServiceService } from './services/produit-service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeModule } from './commande/commande.module';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeClientComponent } from './home-client/home-client.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListeProduitComponent,
    ModifierProduitComponent,
    DetailProduitComponent,
    AjouterProduitComponent,
    ClientComponent,
    CommandeComponent,
    LoginComponent,
    HomeClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ProduitServiceService,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommandeServiceService,
    CommandeModule,
    AuthGuardGuard,
    AuthService,
    MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
