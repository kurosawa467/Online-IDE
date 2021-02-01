package edu.tum.ase.project.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import edu.tum.ase.project.repository.ProjectRepository;
import edu.tum.ase.project.service.ProjectService;
import edu.tum.ase.project.service.SourceFileService;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "Source_File")
@Table(name = "project_source_file")
public class SourceFile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "sourcefile_id")
    private String id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "language", nullable = false)
    private String language;

    @Column(name = "sourcecode", nullable = true, unique = false)
    private String sourcecode;

    // ... additional members, often include @OneToMany mappings
    @ManyToOne
    @JoinColumn(name = "owner_project_id", nullable = false)
    @JsonBackReference
    private Project project;

    protected SourceFile() {
        // no-args constructor required by JPA spec
        // this one is protected since it shouldn't be used directly
    }

    public SourceFile(Project project, String name, String language, String sourcecode) {
        // Project ownerProject = new Project(project.getName(), project.getSourcefiles());
        this.project = project;
        this.name = name;
        this.language = language;
        this.sourcecode = sourcecode;
        System.out.println("this.project = " + this.project.getName());
    }

    // getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSourcecode() {
        return sourcecode;
    }

    public void setSourcecode(String sourcecode) {
        this.sourcecode = sourcecode;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public String toString() {
        return "Source file id: " + this.id + ", name: " + this.name + ", language: " + this.language + ", source code: " + this.sourcecode + ", project: " + this.project.getName();
    }
}
