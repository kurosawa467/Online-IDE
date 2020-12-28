package edu.tum.ase.servletapp;

import javax.servlet.http.HttpServlet;

public abstract class AbstractHttpServlet extends HttpServlet {
    private String name;
    private String urlPattern;

    public AbstractHttpServlet(String name, String urlPattern) {
        this.name = name;
        this.urlPattern = urlPattern;
    }

    public String getName() {
        return name;
    }

    public String getUrlPattern() {
        return urlPattern;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
    }
}
