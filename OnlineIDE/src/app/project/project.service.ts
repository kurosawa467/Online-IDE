import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Project} from './project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ProjectService {
  projectURL = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectURL).pipe();
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectURL, project, httpOptions).pipe();
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.projectURL, project, httpOptions).pipe();
  }

  deleteProject(id: string): Observable<{}> {
    const deleteProjectURL = this.projectURL + '/' + id;
    return this.http.delete(deleteProjectURL, httpOptions).pipe();
  }
}
