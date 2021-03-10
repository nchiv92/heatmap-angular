import { Component } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent {

  showMap = false
  
  changeButtonClass = (type: string) => {
    switch(type) {
      case 'MAP':
        this.showMap = true
        break;
      default:
        this.showMap = false
    }
  }

}
