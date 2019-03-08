import { Component, OnInit } from '@angular/core';
import { CardType } from '../shared';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit {
  cardType: CardType;
  
  constructor() { }

  ngOnInit() {
  }

}
