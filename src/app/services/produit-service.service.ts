import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgModule } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
@NgModule({

})
export class ProduitServiceService {
  constructor(private fb :AngularFirestore) { }
   //ajouterProduit: ajoute un produit dans la base de données
   ajouterProduit(produit){
    return this.fb.collection('produits').add(produit);
  }

  //getProduits: retourne tout les produits qui se trouvent dans la base de donneés
  getProduits(){
    return this.fb.collection('produits').snapshotChanges();
  }

  //getProduits: retourne un seul produit connaisant sa clé dans la base de données
  getProduit(cleProduit){
    return this.fb.collection('produits').doc(cleProduit).snapshotChanges();
  }

  //supprimerProduit: supprime un produit de la base de données
  supprimerProduit(cleProduit){
    return this.fb.collection('produits').doc(cleProduit).delete();
  }

  //modifierProduit: met a jour un film de la base
  modifierProduit(cleProduit, value){
    return this.fb.collection('produits').doc(cleProduit).update(value);
  }
}
