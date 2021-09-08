import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBkt93D7oB5vLfuMcwSpOwC93Tlp6Auxlg",
    authDomain: "sport-67f41.firebaseapp.com",
    projectId: "sport-67f41",
    storageBucket: "sport-67f41.appspot.com",
    messagingSenderId: "183286659222",
    appId: "1:183286659222:web:9e914b06b41dd67595eab7"
    }),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class CommandeModule { }
