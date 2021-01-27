import {ProjectFile} from './projectfile';

export class Project {
  id: number;
  name: string;
  users: number;
  files: ProjectFile[];
}
