import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitServiceService } from '../services/produit-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  produits;
  FilterProduct;
  constructor(private produitService: ProduitServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.produitService.getProduits()
    .subscribe(result =>{
      this.produits = this.FilterProduct = result    
    });
  }
  commander(/*cleProduit*/){

    alert("Impossible d'affecter une commande avant de se connecter");
    this.router.navigate(['/login']);
  }
  Details(cleProduit)
  {
    this.router.navigate(['/details', cleProduit]);
  }

  filte(e){
    if(e != "")
    {
      this.FilterProduct = []
      this.produits.forEach(p =>{if (p.payload.doc.data().nom.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
        {
             this.FilterProduct.push(p); 
        }
    })
    }
    else{
      this.FilterProduct = this.produits;
    }
  }
}
