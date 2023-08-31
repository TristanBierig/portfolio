import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
  public skillIcons: any[] = [
    {
        "name": "Angular",
        "path": "../../assets/img/skill-icons-mobile/angular.svg"
    },
    {
        "name": "TypeScript",
        "path": "../../assets/img/skill-icons-mobile/ts.svg"
    },
    {
        "name": "JavaScript",
        "path": "../../assets/img/skill-icons-mobile/js.svg"
    },
    {
        "name": "Firebase",
        "path": "../../assets/img/skill-icons-mobile/firebase.svg"
    },
    {
        "name": "HTML",
        "path": "../../assets/img/skill-icons-mobile/html.svg"
    },
    {
        "name": "CSS",
        "path": "../../assets/img/skill-icons-mobile/css.svg"
    },
    {
        "name": "Material",
        "path": "../../assets/img/skill-icons-mobile/material.svg"
    },
    {
        "name": "API",
        "path": "../../assets/img/skill-icons-mobile/api.svg"
    },
    {
        "name": "Git",
        "path": "../../assets/img/skill-icons-mobile/git.svg"
    },
    {
        "name": "Scrum",
        "path": "../../assets/img/skill-icons-mobile/scrum.svg"
    }
];


}
