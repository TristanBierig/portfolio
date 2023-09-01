import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  public projectList: any[] = [
    {
      name: 'Join',
      tools: ['Javascript', 'HTML', 'CSS', 'Github'],
      summary: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '../../assets/img/project-thumbnail/join.png'
    },
    {
      name: 'Elemental Masters',
      tools: ['Javascript', 'HTML', 'CSS', 'OOP'],
      summary: "2D-Platform Jump 'n' Run Game based on object-oriented approach. Choose an Element and fight against the army of slimes. Collect Mana and Stars to cast spells and unleash the true power of the Element!",
      image: '../../assets/img/project-thumbnail/elemental-masters.png'
    },
    {
      name: 'Pokédex',
      tools: ['Javascript', 'HTML', 'CSS', 'API'],
      summary: 'Based on the PokéAPI. A simple library that provides and catalogues pokemon information',
      image: '../../assets/img/project-thumbnail/pokedex.png'
    },
  ];
}
