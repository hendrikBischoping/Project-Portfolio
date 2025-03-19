import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreventScrollingService {
overlayIsShown = true;
  constructor() { }
}
