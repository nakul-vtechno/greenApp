import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor() { }

  getAllKeywords() {
    return [{
        id : '1',
        name : 'TEST1',
        privacy : 'private',
        status : 'active'
      },
      {
        id : '2',
        name : 'TEST2',
        privacy : 'private',
        status : 'active'
      },
      {
        id : '3',
        name : 'TEST3',
        privacy : 'private',
        status : 'inactive'
      }];
  }
}
