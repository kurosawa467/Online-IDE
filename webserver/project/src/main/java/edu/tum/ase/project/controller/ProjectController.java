package edu.tum.ase.project.controller;

import edu.tum.ase.project.model.Project;
import edu.tum.ase.project.model.SourceFile;
import edu.tum.ase.project.service.ProjectService;
import org.hibernate.boot.MappingNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project newProject) {
        projectService.createProject(newProject);
        System.out.println("newProject is being created: " + newProject);
        System.out.println("newProject users: " + newProject.getUserIds().toString());
        return newProject;
    }

    @PostMapping("/addUserToProject/{id}/addUserId/{userId}")
    public void addUser(@RequestBody String id, @RequestBody String userId) {
        projectService.addUser(id, userId);
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects(@RequestParam String userId) {
        List<Project> allProjects = projectService.getProjects();
        List<Project> returnedProjects = new ArrayList<Project>();
        for (Project project : allProjects) {
            Set<String> userIdSet = project.getUserIds();
            if (userIdSet.contains(userId)) {
                returnedProjects.add(project);
            }
        }
        return returnedProjects;
    }

    // @PostAuthorize("returnObject.hasUserAccess(authentication.principal.username) || hasRole('ADMIN')")
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
        System.out.println("project " + updatedProject.getName() + " is being updated");
        System.out.println("updated user set is " + updatedProject.getUserIds());
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
