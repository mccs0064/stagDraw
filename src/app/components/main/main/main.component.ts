import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPrize, PrizesService } from 'src/app/services/prizes/prizes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public winners = new Observable<any>();
  public prizeList :Array<IPrize>;

  constructor(private prizeService: PrizesService, private firestore: AngularFirestore) { 
    this.prizeList = this.prizeService.getPrizes();
    this.winners = firestore.collection('winners').doc('prizes').valueChanges();
  }

  
  ngOnInit(){
    this.winners.subscribe((val) => console.log(val) );
  }

}
