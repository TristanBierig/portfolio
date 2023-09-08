import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { disableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showFiller: boolean = false;
  public showSidenav: boolean = false;
  @ViewChild('sideNav') scrollTarget!: HTMLElement;

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}


  openSidenav() {
    this.showSidenav = this._sidenavService.openSidenav();
    disableBodyScroll(this.scrollTarget);
  }


}
