import {Component, Injectable, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [ ProjectService ],
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  projects: Project[];
  modifyingProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  // tslint:disable-next-line:typedef
  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  // tslint:disable-next-line:typedef
  createProject(projectName: string) {
    const newProject: Project = { name: projectName } as Project;
    this.projectService.createProject(newProject).subscribe(project => this.projects.push(project));
  }

  // tslint:disable-next-line:typedef
  updateProject(updateProject: Project) {
    this.projectService.updateProject(updateProject).subscribe(updatedProject => {
        const index = this.projects.findIndex(project => project.id === updateProject.id);
        this.projects[index] = updatedProject;
      });
  }

  deleteProject(deleteProject: Project): void {
    this.projects = this.projects.filter(project => project !== deleteProject);
    this.projectService.deleteProject(deleteProject.id).subscribe();
  }
}
