package edu.tum.ase.project.controller;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.service.ProjectService;
import edu.tum.ase.project.service.SourceFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/project")
public class SourceFileController {
    @Autowired
    private SourceFileService sourceFileService;

    @PostMapping("/sourceFiles")
    public SourceFile createSourceFile(@RequestBody SourceFile newSourceFile) {
        sourceFileService.createSourceFile(newSourceFile);
        System.out.println("newSourceFile is being created: " + newSourceFile);
        return newSourceFile;
    }

    @GetMapping("/sourceFiles")
    public List<SourceFile> getAllSourceFiles() {
        return sourceFileService.getSourceFiles();
    }

    @GetMapping("/sourceFiles/{id}/project")
    public Project getSourceFileProject(@PathVariable String id) {
        SourceFile sourceFile = sourceFileService.findById(id);
        return sourceFileService.getSourceFileProject(sourceFile);
    }

    @PutMapping("/sourceFiles")
    public SourceFile updateSourceFile(@RequestBody SourceFile updatedSourceFile) {
        sourceFileService.updateSourceFile(updatedSourceFile);
        return updatedSourceFile;
    }

    @DeleteMapping("/sourceFiles/{id}")
    public SourceFile deleteSourceFile(@PathVariable String id) {
        SourceFile sourceFileToDelete = sourceFileService.findById(id);
        if (sourceFileToDelete != null) {
            sourceFileService.deleteSourceFile(sourceFileToDelete);
        } else {
            System.out.println("Did not find specified source file. Deletion failed.");
        }
        return sourceFileToDelete;
    }
}
