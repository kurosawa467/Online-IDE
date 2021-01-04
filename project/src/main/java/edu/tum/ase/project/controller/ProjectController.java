package edu.tum.ase.project.controller;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.service.ProjectService;
import org.hibernate.boot.MappingNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
//<<<<<<< HEAD
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//=======
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
//>>>>>>> 683c9aefca63a27431fdbe0ba8b7fd4151c42524


import java.util.List;

//<<<<<<< HEAD
@CrossOrigin
//=======
//>>>>>>> 683c9aefca63a27431fdbe0ba8b7fd4151c42524
@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project newProject) {
        projectService.createProject(newProject);
        return newProject;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getProjects();
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
