import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../project/project';
import {SourceFile} from './sourcefile';
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
import {SourceFileService} from './editor.service';
import {ProjectService} from "../project/project.service";
import {AuthService} from "../auth.service";
import {SourceCode} from "./sourcecode";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  providers: [ SourceFileService ],
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  project: Project;

  // Monaco Editor
  language = 'c';
  theme = 'vs-bright';
  sourcecode: string;
  editorOptions = {theme: this.theme, language: this.language};

  // Modular Flags
  isVisible: boolean;
  isVisibleShare: boolean;
  isVisibleRename: boolean;
  isVisibleShareSuccess: boolean;
  isVisibleShareFail: boolean;

  // File Configurations
  sourcefiles: Set<SourceFile>;
  file: SourceFile;
  filename: string;

  // File Share Configurations
  sharedUserId: string;
  sharedUsername: string;

  // Temporary Renaming
  renamed: string;
  renamedFile: SourceFile;

  // Compiling Result
  sourceCode: SourceCode;

  constructor(private router: Router, private sourceFileService: SourceFileService, private authService: AuthService) {
    console.log(this.router.getCurrentNavigation().extras.state.project);
    this.project = router.getCurrentNavigation().extras.state.project;
    this.file = null;
    this.sourcefiles = new Set<SourceFile>();
    console.log('this.sourcefiles has been initiated.');
    console.log('this.sourcefiles size is ' + this.sourcefiles.size);
  }

  ngOnInit(): void {
    this.getSourceFiles();
  }

  handleOk(): void {
    const unique = true;
    /*
    if (this.sourcefiles.size > 0) {
      for (const sourcefile of this.sourcefiles) {
        if (sourcefile.name === this.filename) {
          unique = false;
        }
      }
    }
    */
    if (unique) {
      let tmplanguage =  this.filename.split(".")
      const newSourceFile: SourceFile = { name: this.filename, sourcecode: '', language: tmplanguage[tmplanguage.length - 1], project: this.project } as SourceFile;
      // this.sourcefiles.add(newSourceFile);
      console.log('Component: newSourceFile is being created: ' + newSourceFile);
      this.sourceFileService.createSourceFile(newSourceFile).subscribe(sourceFile => this.addSourceFile(sourceFile));
      this.file = newSourceFile;
      this.sourcecode = this.file.sourcecode;
      this.language = this.file.language;
      this.isVisible = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
    this.filename = this.generateRandomFileName();
  }

  showModalShare(): void {
    this.isVisibleShare = true;
    this.sharedUserId = "";
    this.sharedUsername = "";
  }

  handleOkShare(): void {
    this.isVisibleShare = false;
    this.authService.checkValidUserId(this.sharedUserId).then(
      validSharedUsername => {
        if (!(validSharedUsername === "INVALID") && !(validSharedUsername === "")) {
          this.addProjectSharedUser(this.project, this.sharedUserId);
          this.sharedUsername = validSharedUsername.valueOf();
          this.isVisibleShareSuccess = true;
        } else {
          this.isVisibleShareFail = true;
        }
      }
    ).catch(error => {
      console.log(error);
    });
  }

  handleOkShareSuccess(): void {
    this.isVisibleShareSuccess = false;
  }

  handleOkShareFail(): void {
    this.isVisibleShareFail = false;
  }

  handleCancelShare(): void {
    this.isVisibleShare = false;
  }

  setFile(file: SourceFile): void {
    this.file = file;
  }

  fileRename(file: SourceFile): void {
    this.isVisibleRename = true;
    this.renamedFile = file;
    this.setRenamedSourceFileProject(this.renamedFile);
  }

  fileDelete(file: SourceFile): void {
    this.sourceFileService.deleteSourceFile(file.id).subscribe(sourceFile => this.deleteSourceFile(sourceFile));
    this.file = null;
    this.sourcecode = '';
  }

  handleOkRename(): void {
    let unique = true;
    for (const f of this.sourcefiles) {
      if (f.name === this.renamed) {
        unique = false;
      }
    }
    if (unique) {
      this.renamedFile.name = this.renamed;
      let tmplanguage =  this.renamed.split(".")
      this.renamedFile.language = tmplanguage[tmplanguage.length - 1]
      // tslint:disable-next-line:max-line-length
      this.sourceFileService.updateSourceFile(this.renamedFile).subscribe(updatedSourceFile => this.updateSourceFileName(updatedSourceFile));
      this.isVisibleRename = false;
    }
  }

  handleCancelRename(): void {
    this.isVisibleRename = false;
  }

  openFile(file: SourceFile): void {
    this.file = file;
    this.sourcecode = file.sourcecode;
    this.language = file.language;

  }

  saveFile(): void {
    this.file.sourcecode = this.sourcecode;
    this.file.project = this.project;
    this.sourceFileService.updateSourceFile(this.file).subscribe(updatedSourceFile => this.updateSourceFileSourceCode(updatedSourceFile));
  }

  generateRandomFileName(): string {
    const randomName: string = uniqueNamesGenerator({
      dictionaries: [colors, animals]
    });
    return randomName;
  }

  getSourceFiles(): void {
    this.sourceFileService.getProjectSourceFiles(this.project).subscribe(sourceFiles => this.setSourceFiles(sourceFiles));
  }

  setSourceFiles(sourceFiles: Set<SourceFile>): void {
    this.sourcefiles = sourceFiles;
  }

  addSourceFile(sourceFile: SourceFile): void {
    const sourceFileList = Array.from(this.sourcefiles);
    sourceFileList.push(sourceFile);
    this.sourcefiles = new Set(sourceFileList);
  }

  updateSourceFileName(updatedSourceFile: SourceFile): void {
    /*
    const fileBeforeRenaming = this.file;
    this.deleteSourceFile(fileBeforeRenaming);
     */
    this.file = updatedSourceFile;
    for (const f of this.sourcefiles) {
      if (f.id === updatedSourceFile.id) {
        f.name = updatedSourceFile.name;
      }
    }
  }

  updateSourceFileSourceCode(updatedSourceFile: SourceFile): void {
    /*
    const fileBeforeRenaming = this.file;
    this.deleteSourceFile(fileBeforeRenaming);
     */
    this.file = updatedSourceFile;
    for (const f of this.sourcefiles) {
      if (f.id === updatedSourceFile.id) {
        f.sourcecode = updatedSourceFile.sourcecode;
      }
    }
  }

  addProjectSharedUser(sharedProject: Project, sharedToUser: String) {
    const updatedUserSet = new Set<String>(sharedProject.userIds);
    updatedUserSet.add(sharedToUser);
    sharedProject.userIds = Array.from(updatedUserSet) as unknown as Set<String>;
    this.sourceFileService.updateProject(sharedProject).subscribe(updatedProject => {
      /*
      const index = this.projects.findIndex(project => project.id === this.modifyingProject.id);
      this.projects[index] = updatedProject;
       */
    });
  }

  setRenamedSourceFileProject(sourceFile: SourceFile): void {
    this.sourceFileService.getSourceFileProject(sourceFile).subscribe(project => this.setProject(sourceFile, project));
  }

  setProject(sourceFile: SourceFile, project: Project): void {
    sourceFile.project = project;
  }

  deleteSourceFile(sourceFile: SourceFile): void {
    this.sourcefiles = new Set(Array.from(this.sourcefiles).filter(({name}) => name !== sourceFile.name));
  }

  compile(): void {
    this.sourceFileService.compileSourceFile(this.file).subscribe(sourceCode => this.sourceCode = sourceCode);
  }
}


