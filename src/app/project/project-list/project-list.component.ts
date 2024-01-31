import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ResponsiveService } from 'src/app/responsive.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  isMobile!: boolean;
  isTablet!: boolean;
  isDesktop!: boolean;
  public projectList: {
    name: string;
    links: { demo: string; github: string };
    tools: string[];
    summary: string;
    image: string;
  }[] = [
    {
      name: 'DABubble',
      links: {
        demo: 'https://dabubble.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/DABubble',
      },
      tools: ['Angular', 'Firebase', 'TypeScript', 'MaterialDesign', 'HTML', 'SCSS', 'Git'],
      summary:
        'DABubble is a "slack-like" Chat-App. Create your own Channel, start a Thread or text someone in private. Thanks to the realtime-database you can share your messages, images and files in an instant with all the other users',
      image: '../../assets/img/project-thumbnail/dabubble.png',
    },
    {
      name: 'Elemental Masters',
      links: {
        demo: 'https://elementalmasters.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/elemental_masters',
      },
      tools: ['JavaScript', 'HTML', 'CSS', 'OOP'],
      summary:
      "2D-Platform Jump 'n' Run Game based on object-oriented approach. Choose an Element and fight against the army of slimes. Collect Mana and Stars to cast spells and unleash the true power of the Element!",
      image: '../../assets/img/project-thumbnail/elemental-masters.png',
    },
    {
      name: 'Simple-CRM',
      links: {
        demo: 'https://crm.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/simple-crm',
      },
      tools: ['Angular', 'TypeScript', 'Firebase', 'MaterialDesign', 'SCSS', 'API'],
      summary:
        'A simple CRM tool to manage customers and stay in contact with your colleagues. Create new customers and register all your lead info. Track the company leads and personal notes in your Dashboard.',
      image: '../../assets/img/project-thumbnail/crm.png',
    },
    {
      name: 'Join',
      links: {
        demo: 'https://join.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/join',
      },
      tools: ['JavaScript', 'HTML', 'CSS', 'Git'],
      summary:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '../../assets/img/project-thumbnail/join.png',
    },
  ];

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
}
