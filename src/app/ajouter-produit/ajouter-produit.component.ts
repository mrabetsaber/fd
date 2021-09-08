import { Produit } from './../shared/Produit';
import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
//import * as firebase from 'firebase/app'


@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  /*myForm :FormGroup;
  url:'';
 message:string;
 imgExist=false;
 selectedImg: any =null;
 fileUrl :any*/
  constructor(private produitService: ProduitServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f){
    let x  : Produit  = {
      nom:f.value['nom'],
      description:f.value['description'],
      prix:f.value['prix'],
      url:f.value['image']
    };
    this.produitService.ajouterProduit(x)
    .then(
      res => {
        alert("Produit Ajouté.");
        this.router.navigate[''];

      }
    );

  }
  /*onSelectFile(e){
    
    if(e.target.files&&e.target.files[0]){
      var reader =new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        this.imgExist=true;
        
      }
      this.selectedImg=e.target.files[0];
      
      const metaData={'contentType':this.selectedImg.type}
      const storageRef:firebase.default.storage.Reference = firebase.default.storage().ref('/photos/featured/url1')
      const uploadTask :firebase.default.storage.UploadTask= storageRef.put(this.selectedImg,metaData);
      console.log("uploading" , this.selectedImg.name);
      
        uploadTask.then((uploadSnapshot: firebase.default.storage.UploadTaskSnapshot)=>{

          console.log("upload is complite");
          
          storageRef.getDownloadURL().then(url=> {
            // url is the download URL for 'images/stars.jpg'
          this.fileUrl=url})
        })
    }
    else{
      this.selectedImg=null;
    }
  
}*/
}



















