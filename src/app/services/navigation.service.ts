import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  public navigatorOpen = false;

  closeNavigator(){
    this.navigatorOpen = false;
  }

  openNavigator(){
    this.navigatorOpen = true;
  }

  toggleNavigator() {
    this.navigatorOpen = !this.navigatorOpen;
  }

  status(){
    return this.navigatorOpen;
  }
}
