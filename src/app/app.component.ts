import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spell-comparator';
  // http://1v1baron.com:3000/resources/rarities.json
  // http://1v1baron.com:3000/resources/troops.json
  // http://1v1baron.com:3000/resources/spells.json
}
