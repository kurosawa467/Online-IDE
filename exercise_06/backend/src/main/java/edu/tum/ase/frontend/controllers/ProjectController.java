package edu.tum.ase.frontend.controllers;

import edu.tum.ase.frontend.models.Project;
import edu.tum.ase.frontend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/")
    public List<Project> getProjects() {
        return projectService.getProjects();
    }

    @PostMapping("/")
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable("id") String projectId) {
        Project project = projectService.findById(projectId);
        projectService.deleteProject(project);
    }
}
