import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showFiller: boolean = false;
  public showSidenav: boolean = false;

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}

  openSidenav() {
    this.showSidenav = this._sidenavService.openSidenav();
  }
}
