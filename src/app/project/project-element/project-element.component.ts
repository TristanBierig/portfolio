import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent {
@Input() public project: any;
}
