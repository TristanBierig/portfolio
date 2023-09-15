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
      name: 'Join',
      links: {
        demo: 'https://join.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/join',
      },
      tools: ['Javascript', 'HTML', 'CSS', 'Github'],
      summary:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '../../assets/img/project-thumbnail/join.png',
    },
    {
      name: 'Elemental Masters',
      links: {
        demo: 'https://elementalmasters.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/elemental_masters',
      },
      tools: ['Javascript', 'HTML', 'CSS', 'OOP'],
      summary:
        "2D-Platform Jump 'n' Run Game based on object-oriented approach. Choose an Element and fight against the army of slimes. Collect Mana and Stars to cast spells and unleash the true power of the Element!",
      image: '../../assets/img/project-thumbnail/elemental-masters.png',
    },
    {
      name: 'Pokédex',
      links: {
        demo: 'https://pokedex.tristan-bierig.de/',
        github: 'https://github.com/TristanBierig/pokedex',
      },
      tools: ['Javascript', 'HTML', 'CSS', 'API'],
      summary:
        'Based on the PokéAPI. A simple library that provides and catalogues pokemon information',
      image: '../../assets/img/project-thumbnail/pokedex.png',
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
