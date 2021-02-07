package edu.tum.ase.project.service;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public Project findById(String id) {
        Optional<Project> project = projectRepository.findById(id);
        if (project.isPresent()) {
            return project.get();
        }
        return null;
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project updateProject(Project project) {
        projectRepository.save(project);
        return project;
    }

    public void deleteProject(Project project) {
        projectRepository.delete(project);
    }

    public void addUser(String projectId, String userId) {
        if (projectRepository.findById(projectId).isPresent()) {
            projectRepository.findById(projectId).get().addUsername(userId);
        }
    }

    public boolean checkProjectOwnership(String projectId, String userId) {
        boolean userOwnProject = false;
        if (projectRepository.findById(projectId).isPresent()) {
            userOwnProject = projectRepository.findById(projectId).get().projectOwnership(userId);
        }
        return userOwnProject;
    }
}
