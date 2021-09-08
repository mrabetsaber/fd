import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits;
  constructor(private produitService: ProduitServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.produitService.getProduits()
    .subscribe(result =>
      this.produits = result);
  }
  modifier(cleProduit){
    this.router.navigate(['/edit/', cleProduit]);
  }
  supprimer(cleProduit){
    this.produitService.supprimerProduit(cleProduit)
    .then(
      res =>
      alert("Produit Supprimer")
    );
  }
}
