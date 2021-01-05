import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../project';
import {ProjectFile} from '../projectfile';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  project: Project;

  // Monaco Editor
  language = 'c';
  theme = 'vs-bright';
  code: string;
  editorOptions = {theme: this.theme, language: this.language};

  // Modular Flags
  isVisible: boolean;
  isVisibleShare: boolean;
  isVisibleRename: boolean;

  // File Configurations
  files: ProjectFile[];
  file: ProjectFile;
  filename: string;

  // Temporary Renaming
  renamed: string;
  renamedFile: ProjectFile;


  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state.project);
    this.project = router.getCurrentNavigation().extras.state.project;
    this.files = this.project.files;
    this.file = null;
  }

  ngOnInit(): void {

  }

  handleOk(): void {
    let unique = true;
    for (const file of this.files) {
      if (file.name === this.filename) {
        unique = false;
      }
    }
    if (unique) {
      const f = {name: this.filename, code: '', language: 'c'};
      this.files.push(f);
      this.file = f;
      this.code = this.file.code;
      this.language = this.file.language;
      this.isVisible = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }

  showModalShare(): void {
    this.isVisibleShare = true;
  }

  handleOkShare(): void {
    this.isVisibleShare = false;
  }

  handleCancelShare(): void {
    this.isVisibleShare = false;
  }

  setFile(file: ProjectFile): void {
    this.file = file;
  }

  fileRename(file: ProjectFile): void {
    this.isVisibleRename = true;
    this.renamedFile = file;
  }

  fileDelete(file: ProjectFile): void {
    this.files = this.files.filter(({name}) => name !== file.name);
    this.file = null;
    this.code = '';
  }

  handleOkRename(): void {
    let unique = true;
    for (const f of this.files) {
      if (f.name === this.renamed) {
        unique = false;
      }
    }
    if (unique) {
      this.renamedFile.name = this.renamed;
      this.isVisibleRename = false;
    }
  }

  handleCancelRename(): void {
    this.isVisibleRename = false;
  }

  openFile(file: ProjectFile): void {
    this.file = file;
    this.code = file.code;
    this.language = file.language;

  }

  saveFile(): void {
    this.file.code = this.code;

  }
}


