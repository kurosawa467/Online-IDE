package edu.tum.ase.servletapp;

import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;

import javax.servlet.http.HttpServlet;
import java.io.File;

public class EmbeddedTomcatServer extends Tomcat {

    private Context context;

    public EmbeddedTomcatServer(int port) {
        this.port = port;
    }
    public EmbeddedTomcatServer() {
        this(8082);
    }
    public void registerServletHandler(AbstractHttpServlet httpServlet) {
        if (this.context == null) {
            setDefaultContext();
        }
        this.addServlet(this.context.getPath(), httpServlet.getName(), httpServlet);
        this.context.addServletMappingDecoded(httpServlet.getUrlPattern(), httpServlet.getName());
    }

    private void setDefaultContext() {
        this.context = this.addContext("", new File(".").getAbsolutePath());
    }

    public void run(){
        try {
            this.start();
            this.getServer().await();
        } catch (LifecycleException e) {
            e.printStackTrace();
        }
    }
}
