package edu.tum.ase.frontend.controllers;

import edu.tum.ase.frontend.models.Project;
import edu.tum.ase.frontend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("projects", projectService.getProjects());
        return "index";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("project", new Project());
        return "create";
    }

    // Note: We are using HTTP GET here for simplicity.
    // Generally, you should use the correct HTTP method for a delete action (HTTP DELETE).
    @GetMapping("/delete/{id}")
    public String deleteProject(@PathVariable("id") String projectId, Model model) {
        Project project = projectService.findById(projectId);
        projectService.deleteProject(project);
        return "redirect:/";
    }

    @PostMapping(value = "/create")
    public String createProject(@Valid Project project, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "create";
        }
        projectService.createProject(project);
        return "redirect:/";
    }
}
