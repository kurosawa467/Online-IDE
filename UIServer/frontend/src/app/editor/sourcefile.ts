import {Project} from '../project/project';

export interface SourceFile {
  id: string;
  name: string;
  language: string;
  sourcecode: string;
  project: Project;
}
