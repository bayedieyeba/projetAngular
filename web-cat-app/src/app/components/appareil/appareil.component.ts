import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareils.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName?: string
  @Input() appareilStatus?: string;
  @Input() index? : number
  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
    return null
}
onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.index);
  } else if(this.appareilStatus === 'éteint') {
    this.appareilService.switchOnOne(this.index);
  }
}
}
