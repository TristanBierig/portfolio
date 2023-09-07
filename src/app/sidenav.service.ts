import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenavOpen: boolean = false;
  
  constructor() {}
}
