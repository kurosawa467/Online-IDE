package edu.tum.ase.frontend.services;

import edu.tum.ase.frontend.models.Project;
import edu.tum.ase.frontend.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project createProject(Project project) {
        Project p = new Project();
        p.setName(project.getName());
        return projectRepository.save(p);
    }

    public Project findById(String projectId) {
        return projectRepository.findById(projectId).orElseThrow(() -> new IllegalArgumentException("Invalid projectId:" + projectId));
    }

    public void deleteProject(Project project) {
        projectRepository.delete(project);
    }
}
