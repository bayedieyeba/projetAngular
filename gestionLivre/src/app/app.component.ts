import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    const firebase = {
      apiKey: "AIzaSyCCjCnQlecTnnYrHf6qajbb1_AAPLhDOgM",
      authDomain: "bookshelves-53b71.firebaseapp.com",
      databaseURL: "https://bookshelves-53b71.firebaseio.com",
      projectId: "bookshelves-53b71",
      storageBucket: "bookshelves-53b71.appspot.com",
      messagingSenderId: "1029777318264",
      appId: "1:1029777318264:web:e9defb48398206e426688d",
      measurementId: "G-592H5J6KMD"
  };
  
  
}
}
