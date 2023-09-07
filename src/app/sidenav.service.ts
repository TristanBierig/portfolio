import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenavIsOpen: boolean = false;

  constructor() {}

  openSidenav() {
    return true;
  }

  closeSidenav() {
    return false;
  }
}
