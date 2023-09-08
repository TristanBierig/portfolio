import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() public parentData!: boolean;
  @Output() public childEvent = new EventEmitter();

  constructor(private _sidenavService: SidenavService) {}

  closeSidenav() {
    this.childEvent.emit(this._sidenavService.closeSidenav());
    
  }
}
