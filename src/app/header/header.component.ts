import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showFiller: boolean = false;
  public showSidenav: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }


  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }

}
