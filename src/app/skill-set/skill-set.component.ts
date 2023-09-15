import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss'],
})
export class SkillSetComponent implements OnInit {
  isMobile!: boolean;
  isTablet!: boolean;
  isDesktop!: boolean;
  public skillIcons: any[] = [
    {
      name: 'Angular',
      path: '../../assets/img/skill-icons-mobile/angular.svg',
    },
    {
      name: 'TypeScript',
      path: '../../assets/img/skill-icons-mobile/ts.svg',
    },
    {
      name: 'JavaScript',
      path: '../../assets/img/skill-icons-mobile/js.svg',
    },
    {
      name: 'Firebase',
      path: '../../assets/img/skill-icons-mobile/firebase.svg',
    },
    {
      name: 'HTML',
      path: '../../assets/img/skill-icons-mobile/html.svg',
    },
    {
      name: 'CSS',
      path: '../../assets/img/skill-icons-mobile/css.svg',
    },
    {
      name: 'Material',
      path: '../../assets/img/skill-icons-mobile/material.svg',
    },
    {
      name: 'API',
      path: '../../assets/img/skill-icons-mobile/api.svg',
    },
    {
      name: 'Git',
      path: '../../assets/img/skill-icons-mobile/git.svg',
    },
    {
      name: 'Scrum',
      path: '../../assets/img/skill-icons-mobile/scrum.svg',
    },
  ];

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
