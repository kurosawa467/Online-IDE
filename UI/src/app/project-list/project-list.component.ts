import { Component, OnInit } from '@angular/core';
import {Project} from '../project';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createProject(): void {
    console.log('This should create a Project');
    const project = new Project();
    project.users = 1;
    project.name = 'New Project';
    project.files = [];
    if (this.projects.length > 0) {
      project.id = this.projects[this.projects.length - 1].id + 1;
    }
    else {
      project.id = 0;
    }
    this.projects.push(project);
  }

  deleteProject(project: Project): void {
    this.projects = this.projects.filter(({ id }) => id !== project.id);
  }
}
