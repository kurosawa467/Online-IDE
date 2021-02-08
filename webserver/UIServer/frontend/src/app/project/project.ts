import {SourceFile} from '../editor/sourcefile';

export interface Project {
  id: string;
  name: string;
  users: number;
  // sourceFileSet: Set<SourceFile>;
  sourcefiles: Set<SourceFile>;
  userIds: Set<string>;
}
