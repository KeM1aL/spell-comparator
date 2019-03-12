import { Component, OnInit } from '@angular/core';
import { CardComparatorService } from './card-comparator.service';

@Component({
  selector: 'app-card-comparator',
  templateUrl: './card-comparator.component.html',
  styleUrls: ['./card-comparator.component.scss']
})
export class CardComparatorComponent implements OnInit {

  constructor(private cardComparatorService: CardComparatorService) { }

  ngOnInit() {
    this.cardComparatorService.selectedSpells.subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
