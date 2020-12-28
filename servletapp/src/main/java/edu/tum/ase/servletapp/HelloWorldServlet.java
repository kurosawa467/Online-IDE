package edu.tum.ase.servletapp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class HelloWorldServlet extends AbstractHttpServlet {
    public HelloWorldServlet() {
        super("HelloWorldServlet", "/*");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter printWriter = resp.getWriter();
        printWriter.println("<html><head><title>Hello World</title></head><body>");
        printWriter.println("<h1>Hello World</h1>");
        printWriter.println("</body></html>");
    }
}
