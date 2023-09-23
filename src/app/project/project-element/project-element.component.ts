import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss'],
})
export class ProjectElementComponent implements OnInit {
  @Input() public project: any;
  @Input() public odd: any;
  isMobile!: boolean;
  isTablet!: boolean;
  isDesktop!: boolean;

  constructor(private ResponsiveService: ResponsiveService) {}

  ngOnInit(): void {
    Aos.init();
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

  redirectToProject(target: string) {
    window.open(target, '_blank');
  }
}
