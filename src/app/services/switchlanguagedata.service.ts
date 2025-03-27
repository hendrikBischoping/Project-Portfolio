import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchlanguagedataService {
  german: boolean;

  constructor() {
    const storedValue = localStorage.getItem('german');
    this.german = storedValue !== null ? JSON.parse(storedValue) : true;
    if (storedValue === null) {
      localStorage.setItem('german', JSON.stringify(this.german));
    }
  }
}