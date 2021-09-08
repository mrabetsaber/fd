import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitServiceService } from '../services/produit-service.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  produits;
  FilterProduct;

  @Output() isLoogout = new EventEmitter<void>()
  constructor(private produitService: ProduitServiceService,
    private router: Router,
    private firebaseService: AuthService) { }

  ngOnInit(): void {
    this.produitService.getProduits()
    .subscribe(result =>{
      this.produits = this.FilterProduct = result    
    });
  }
  commander(cleProduit){
  
    this.router.navigate(['/commande', cleProduit]);
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
  logout(){
    this.firebaseService.logout()
    this.isLoogout.emit()
    this.router.navigate(['']);
  }
}

