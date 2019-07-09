import { Component, OnInit } from '@angular/core';
import { KeywordsService } from '../services/keywords/keywords.service';

declare var device: { platform: any; };
declare var cordova: { platform: any; getAppVersion: any };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private data: KeywordsService) { }

  keywords: any = [];
  keywordsOption = [];
  currentStep = 1;

  ngOnInit() {
    const data: object = this.data.getAllKeywords();
    this.keywords = data;
    for (let item of this.keywords) {
      this.keywordsOption.push(false);
    }
    window.document.addEventListener('deviceready', () => {
      // alert(device.platform);
      console.log('[CORDOVA] Init*', cordova);
      cordova.getAppVersion.getVersionNumber().then((version) => {
      console.log('[CORDOVA] App version is ', version);
    });
    }, false);
  }

  getsAllKeywords() {
    const data: object = this.data.getAllKeywords();
    this.keywords = data;
    for (let item of this.keywords) {
        this.keywordsOption.push(false);
    }
    return data;
  }

  showOptions(index) {
    for (let i = 0; i < this.keywordsOption.length; i++){
      if (i !== index){
        this.keywordsOption[i] = false;
      }
    }
    this.keywordsOption[index] = !this.keywordsOption[index];
  }

  updateCurrentStep() {
    this.currentStep === 1 ? this.currentStep++ : this.currentStep--;
  }
}
