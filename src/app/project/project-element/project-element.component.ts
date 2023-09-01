import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {
@Input() public project: any;

ngOnInit(): void {
  AOS.init();
}
}