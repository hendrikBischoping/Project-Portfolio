import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchlanguagedataService {
  german: boolean;

  /**
   * constructor checks if a translation value is saved in local storage - otherwise it sets 'german' as default
   */
  constructor() {
    const storedValue = localStorage.getItem('german');
    this.german = storedValue !== null ? JSON.parse(storedValue) : true;
    if (storedValue === null) {
      localStorage.setItem('german', JSON.stringify(this.german));
    }
  }
}