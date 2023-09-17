import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponsiveService } from '../responsive.service';
import { ImprintComponent } from '../imprint/imprint.component';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isMobile!: boolean;
  isTablet!: boolean;
  isDesktop!: boolean;

  constructor(
    private ResponsiveService: ResponsiveService,
    public dialog: MatDialog
  ) {}

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

  openDialog(target: string) {
    if (target == 'imprint') {
      this.dialog.open(ImprintComponent);
    }

    if (target == 'privacy') {
      this.dialog.open(PrivacyComponent);
    }
  }
}
