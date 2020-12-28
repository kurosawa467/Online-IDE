package edu.tum.ase.servletapp;

import java.util.Date;

public class Greeting {

    private final long id;
    private final String content;
    private final String author;
    private final Date date;

    public Greeting(long id, String content, String author, Date date) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getAuthor() {
        return author;
    }

    public Date getDate() {
        return date;
    }

}
