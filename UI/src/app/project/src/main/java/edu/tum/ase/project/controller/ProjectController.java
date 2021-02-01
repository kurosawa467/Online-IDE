package edu.tum.ase.project.controller;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.service.ProjectService;
import org.hibernate.boot.MappingNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project newProject) {
        projectService.createProject(newProject);
        System.out.println("newProject is being created: " + newProject);
        return newProject;
    }

    @PostMapping("/addUserToProject/{id}/addUsername/{username}")
    public void addUser(@RequestBody String id, @RequestBody String username) {
        projectService.addUser(id, username);
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getProjects();
    }

    @GetMapping("/projects/{id}")
    public Project getProjectById(@PathVariable String id) {
        return projectService.findById(id);
    }

    @GetMapping("/projects/{id}/sourcefiles")
    public Set<SourceFile> getProjectSourceFile(@PathVariable String id) {
        return projectService.findById(id).getSourcefiles();
    }

    @GetMapping("/checkOwnership/{id}/addUsername/{username}")
    public boolean checkProjectOwnership(@RequestBody String id, @RequestBody String username) {
        return projectService.checkProjectOwnership(id, username);
    }

    @PutMapping("/projects")
    public Project updateProject(@RequestBody Project updatedProject) {
        projectService.updateProject(updatedProject);
        return updatedProject;
    }

    @DeleteMapping("/projects/{id}")
    public Project deleteProject(@PathVariable String id) {
        Project projectToDelete = projectService.findById(id);
        if (projectToDelete != null) {
            projectService.deleteProject(projectToDelete);
        } else {
            System.out.println("Did not find specified project. Deletion failed.");
        }
        return projectToDelete;
    }
}
