import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  produit;
  nom:string;
  description:string;
  prix:number;
  //url:string;
  id:string;
  constructor(private produitService: ProduitServiceService,
    private router: Router,
    private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.produitService.getProduit(this.id)
    .subscribe(res =>{
      this.produit = res;
      this.nom = this.produit.payload.data().nom;
      this.description = this.produit.payload.data().description;
      this.prix = this.produit.payload.data().prix;
      //this.url = this.produit.payload.data().url;
    })
  }
    onSubmit(f)
    {
      console.log(f.value);
      this.produitService.modifierProduit(this.id,f.value);
      alert("Produit Modifier");
      console.log(this.produit);
      this.router.navigate[''];
    }


}
