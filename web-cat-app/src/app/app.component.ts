import { Component,OnInit } from '@angular/core';
import { AppareilService } from './services/appareils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appareils?:any[]
  
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';


  isAuth = false;
  constructor(private appareilService: AppareilService){
    setTimeout(()=> {
      this.isAuth = true;
    }, 4000
    )
  }
  ngOnInit(){
    this.appareils = this.appareilService.appareils
  }
  onAllumer(){
    this.appareilService.switchOnAll()
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
    return null
}
}
