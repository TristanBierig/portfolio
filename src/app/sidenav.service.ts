import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {

  constructor() {}

  openSidenav() {
    return true;
  }

  closeSidenav() {
    return false;
  }
}
