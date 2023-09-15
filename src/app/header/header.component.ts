import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { disableBodyScroll } from 'body-scroll-lock';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showFiller: boolean = false;
  public showSidenav: boolean = false;
  isMobile!: boolean;
  @ViewChild('sideNav') scrollTarget!: HTMLElement;

  constructor(
    private _sidenavService: SidenavService,
    private ResponsiveService: ResponsiveService
  ) {}

  ngOnInit() {
    this.ResponsiveService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
      console.log(this.isMobile);
    });
  }

  openSidenav() {
    this.showSidenav = this._sidenavService.openSidenav();
    disableBodyScroll(this.scrollTarget);
  }
}
