import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  about = "Welcome to my demo heatmap task, please select the map button in the top navigation bar to access the heatmap.";

}
