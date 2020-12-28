package edu.tum.ase.servletapp;

import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

public class ServletApplication {
    public static void main(String[] args) throws LifecycleException {
        Tomcat tomcat = new Tomcat();
        // define port of tomcat (default for tomcat is 8080)
        tomcat.setPort(8082);

        // Create context for web app
        String contextPath = ""; // use default root context
        String docBase = new File(".").getAbsolutePath();
        Context context = tomcat.addContext(contextPath, docBase);

        // define name and url pattern (in this case all urls) for servlet
        String servletName = "GreetingServlet";
        String urlPattern = "/greeting";
        GreetingServlet greetingServlet = new GreetingServlet();

        // add servlet to embedded tomcat with context
        tomcat.addServlet(contextPath, servletName, greetingServlet);
        context.addServletMappingDecoded(urlPattern, servletName);

        // start tomcat and wait for requests
        tomcat.start();
        tomcat.getServer().await();
    }
}
