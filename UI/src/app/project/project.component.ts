import {Component, Injectable, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './project';
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
import {SourceFile} from '../editor/sourcefile';
import {ReplaySubject} from "rxjs";
import {map, mergeMap, switchMap} from "rxjs/operators";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [ ProjectService ],
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  modifyingProject: Project;
  modifying: boolean;
  currentUsername: string;

  constructor(private projectService: ProjectService, private app: AppComponent) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  // tslint:disable-next-line:typedef
  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  // tslint:disable-next-line:typedef
  createProject() {
    this.modifying = false;
    const randomName: string = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals]
    });
    const newSourceFileSet = new Array<SourceFile>();
    const usernames = new Array<string>();
    const currentUsername = this.app.getUsername();
    usernames.push(currentUsername);
    // @ts-ignore
    const newProject: Project = {
      name: randomName,
      sourcefiles: newSourceFileSet,
      usernames: usernames
    } as Project;
    this.projectService.createProject(newProject).subscribe(project => this.projects.push(project));
  }

  // tslint:disable-next-line:typedef
  modifyProject(project: Project) {
    this.modifying = true;
    this.modifyingProject = project;
  }

  // tslint:disable-next-line:typedef
  updateProject() {
    if (this.modifying) {
      this.projectService.updateProject(this.modifyingProject).subscribe(updatedProject => {
        const index = this.projects.findIndex(project => project.id === this.modifyingProject.id);
        this.projects[index] = updatedProject;
      });
      this.modifying = false;
    }

  }

  deleteProject(deleteProject: Project): void {
    this.projects = this.projects.filter(project => project !== deleteProject);
    this.projectService.deleteProject(deleteProject.id).subscribe();
  }

  /*
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
  */
}
