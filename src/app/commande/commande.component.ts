import { ProduitServiceService } from './../services/produit-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeServiceService } from './../services/commande-service.service';
import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  produit;
  id:number;
  nomp:string;
  prix:number;
  prixApayer:number;
  constructor(private commandeService:CommandeServiceService,private produitService:ProduitServiceService,
    private router:Router,
    private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.produitService.getProduit(this.id)
    .subscribe(res =>{
      this.produit = res;
      this.nomp = this.produit.payload.data().nom;
      this.prix = this.produit.payload.data().prix;
    })
    ;
  }
  
  onSubmit(f){
    let x: Commande = {
      nom:f.value['nom'],
      prenom:f.value['prenom'],
      e_mail:f.value['email'],
      telephone:f.value['tel'],
      quantite:f.value['quantite'],
      nomProduit:this.nomp,
      prixApayer:0
    };
    this.prixApayer = x.quantite * this.prix;
    x.prixApayer = this.prixApayer;
    console.log(x.prixApayer);
    this.commandeService.ajouterCommande(x)
    .then(res =>{
      alert("Commande affecté nous allons l'appeller le jour de livraison! \n Le Prix a payer est: " + this.prixApayer + " D");
      this.router.navigate[''];
    })
  }

}
