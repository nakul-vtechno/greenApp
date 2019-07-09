import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'greenApp';
  constructor(private navigator: NavigationService) {

  }
  onActivate() {
    console.log('onActivate()()onActivate');
    this.navigator.closeNavigator();
  }
  onDeactivate() {
    console.log('onDeactivate()()onDeactivate');
  }
}
