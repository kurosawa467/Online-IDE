import {SourceFile} from '../editor/sourcefile';

export interface Project {
  id: string;
  name: string;
  // sourceFileSet: Set<SourceFile>;
  sourcefiles: Set<SourceFile>;
  userIds: Set<string>;
}
