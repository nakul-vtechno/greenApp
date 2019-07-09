import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit{

  constructor(public navigator: NavigationService) {  }

  public navigatorOpen = this.navigator.status();
  @Input() dataStatus;
  ngOnInit(): void {
  }

  togleNavigator() {
    this.navigator.toggleNavigator();
  }
}
