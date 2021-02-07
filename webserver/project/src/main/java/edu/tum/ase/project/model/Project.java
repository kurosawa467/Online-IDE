package edu.tum.ase.project.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Source;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "Project")
@Table(name = "projects")
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "project_id")
    private String id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    // ... additional members, often include @OneToMany mappings
    @OneToMany(mappedBy = "project")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonManagedReference
    private Set<SourceFile> sourcefiles;

    @ElementCollection
    @Column(name = "userIds")
    private Set<String> userIds = new HashSet<>();

    protected Project() {
        // no-args constructor required by JPA spec
        // this one is protected since it shouldn't be used directly
    }

    public Project(String name) {
        this.name = name;
        this.sourcefiles = new HashSet<>();
    }

    public Project(String name, Set<SourceFile> sourceFiles) {
        this.name = name;
        this.sourcefiles = sourceFiles;
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

    public Set<SourceFile> getSourcefiles() {
        return this.sourcefiles;
    }

    public void addSourceFile(SourceFile sourceFile) {
        sourcefiles.add(sourceFile);
        sourceFile.setProject(this);
    }

    public void removeSourceFile(SourceFile sourceFile) {
        sourcefiles.remove(sourceFile);
        sourceFile.setProject(null);
    }

    public void addUsername(String userId) {
        userIds.add(userId);
    }

    public boolean projectOwnership(String userId) {
        return userIds.contains(userId);
    }

    public Set<String> getUserIds() {
        return this.userIds;
    }

    public String toString() {
        return "project id: " + this.id + ", name: " + this.name;
    }
}
