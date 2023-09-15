import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-atf',
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
})
export class AtfComponent implements OnInit {
  isMobile!: boolean;
  isTablet!: boolean;
  isDesktop!: boolean;
  
  constructor(private ResponsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.ResponsiveService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });

    this.ResponsiveService.isTablet$.subscribe((isTablet) => {
      this.isTablet = isTablet;
    });

    this.ResponsiveService.isDesktop$.subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }
}
