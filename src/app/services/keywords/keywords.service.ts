import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor() { }

  getAllKeywords() {
    return [{
        id : '1',
        name : 'RESUME',
        privacy : 'private',
        status : 'active'
      },
      {
        id : '2',
        name : 'SALES',
        privacy : 'private',
        status : 'active'
      },
      {
        id : '3',
        name : 'ROCKY',
        privacy : 'private',
        status : 'inactive'
      }];
  }
}
