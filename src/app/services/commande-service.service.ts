import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@NgModule({

})
export class CommandeServiceService {

  constructor(private fb: AngularFirestore) { }

    //ajouterCommande: ajoute une commande dans la base de données
    ajouterCommande(commande){
      return this.fb.collection('commandes').add(commande);
      }
}
