import { Component, Input, OnInit } from '@angular/core';
import { IPrize } from 'src/app/services/prizes/prizes.service';

@Component({
  selector: 'prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss']
})
export class PrizeComponent implements OnInit {
  @Input()
  public prize!: IPrize;
  constructor() { }

  ngOnInit(): void {
  }

}
