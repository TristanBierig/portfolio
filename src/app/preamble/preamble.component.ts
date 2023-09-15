import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-preamble',
  templateUrl: './preamble.component.html',
  styleUrls: ['./preamble.component.scss'],
})
export class PreambleComponent implements OnInit {
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
