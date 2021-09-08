import { ActivatedRoute, Router } from '@angular/router';
import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  produit;
  nomProduit: string;
  descProduit: string;
  prixProduit: number;
  id:number;
  urlProduit: string;
  constructor(private produitService: ProduitServiceService,
  private  ar: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
  this.id = this.ar.snapshot.params['id'];
  this.produitService.getProduit(this.id)
  .subscribe(res =>{
    this.produit = res;
    this.nomProduit = this.produit.payload.data().nom;
    this.descProduit = this.produit.payload.data().description;
    this.prixProduit = this.produit.payload.data().prix;
    this.urlProduit =this.produit.payload.data().url;
  });
  }
  /*commander(){
  
    this.router.navigate(['/commande', this.id]);
  }*/
  
}
