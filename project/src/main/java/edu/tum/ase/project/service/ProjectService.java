package edu.tum.ase.project.service;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project createProject(Project project) {
        projectRepository.save(project);
        return project;
    }

    public Project findByName(String name) {
        return projectRepository.findByName(name);
    }

    public List<Project> getProjects() {
        // return new ArrayList<Project>();
        return projectRepository.findAll();
    }

    //NOT IN EXERCISE SHEET
    public void deleteProject(String projectName) {
        projectRepository.delete(projectRepository.findByName(projectName));
    }
}