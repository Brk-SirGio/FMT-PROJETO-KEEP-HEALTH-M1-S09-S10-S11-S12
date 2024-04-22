import { Injectable } from '@angular/core';
import { LocalStorage } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private localStorage: LocalStorage) {
    this.setItem('meuObjeto', {
      id: 1,
      name: 'Abacate',
      description: '...',
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ''
    });
  }

}

}
