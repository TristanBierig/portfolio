import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() public parentData!: boolean;
  @Output() public childEvent = new EventEmitter();

  constructor() {

  }

  closeSidenav() {
    this.childEvent.emit(!this.parentData);
  }
}
