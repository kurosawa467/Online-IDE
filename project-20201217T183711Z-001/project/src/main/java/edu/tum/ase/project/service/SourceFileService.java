package edu.tum.ase.project.service;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.repository.SourceFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SourceFileService {
    @Autowired
    private SourceFileRepository sourceFileRepository;

    public SourceFile createSourceFile(SourceFile sourceFile) {
        sourceFileRepository.save(sourceFile);
        return sourceFile;
    }

    public SourceFile findByName(String sourcefileName) {
        return sourceFileRepository.findByName(sourcefileName);
    }

    public SourceFile findById(String id) {
        Optional<SourceFile> sourceFile = sourceFileRepository.findById(id);
        if (sourceFile.isPresent()) {
            return sourceFile.get();
        }
        return null;
    }

    public List<SourceFile> getSourceFiles() {
        return sourceFileRepository.findAll();
    }

    public SourceFile updateSourceFile(SourceFile sourceFile) {
        sourceFileRepository.save(sourceFile);
        return sourceFile;
    }

    public void deleteSourceFile(SourceFile sourceFile) {
        sourceFileRepository.delete(sourceFile);
    }
}
