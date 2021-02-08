import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {SourceFile} from './sourcefile';
import {Project} from '../project/project';
import {SourceCode} from "./sourcecode";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class SourceFileService {
  sourceFileURL = '/project/sourceFiles';
  projectURL = '/project/projects';
  compilerURL = '/compiler/compile';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getSourceFiles(): Observable<SourceFile[]> {
    return this.http.get<SourceFile[]>(this.sourceFileURL).pipe();
  }

  getProjectSourceFiles(project: Project): Observable<Set<SourceFile>> {
    return this.http.get<Set<SourceFile>>(this.projectURL + '/' + project.id + '/sourcefiles').pipe();
  }

  createSourceFile(sourceFile: SourceFile): Observable<SourceFile> {
    console.log('Service: newSourceFile is being created: ' + sourceFile);
    return this.http.post<SourceFile>(this.sourceFileURL, sourceFile, httpOptions).pipe();
  }

  updateSourceFile(sourceFile: SourceFile): Observable<SourceFile> {
    return this.http.put<SourceFile>(this.sourceFileURL, sourceFile, httpOptions).pipe();
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.projectURL, project, httpOptions).pipe();
  }

  deleteSourceFile(id: string): Observable<any> {
    const deleteSourceFileURL = this.sourceFileURL + '/' + id;
    return this.http.delete(deleteSourceFileURL, httpOptions).pipe();
  }

  // tslint:disable-next-line:typedef
  getSourceFileProject(sourceFile: SourceFile): Observable<Project> {
    return this.http.get<Project>(this.sourceFileURL + '/' + sourceFile.id + '/project').pipe();
  }

  compileSourceFile(sourceCode: SourceCode): Observable<SourceCode> {
    return this.http.post<SourceCode>(this.compilerURL, sourceCode, httpOptions).pipe();
  }
}
