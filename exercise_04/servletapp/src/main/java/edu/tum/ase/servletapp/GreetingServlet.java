package edu.tum.ase.servletapp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GreetingServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter printWriter = resp.getWriter();
        List<Greeting> guestbook = new ArrayList<>();
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        try {
            guestbook.add(new Greeting(
                    1,
                    "I want more cats!",
                    "John",
                    dateFormat.parse("20/12/2019")
            ));
            guestbook.add(new Greeting(
                    2,
                    "More cats!",
                    "Marie",
                    dateFormat.parse("21/12/2019")
            ));
            guestbook.add(new Greeting(
                    3,
                    "Someone who don't like cats?",
                    "Richard",
                    dateFormat.parse("22/12/2019")
            ));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        printWriter.print(convertGuestbookToXml(guestbook));
    }

    private String convertGuestbookToXml(List<Greeting> guestbook) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("<?xml version=\"1.0\"?>\n");
        stringBuilder.append("<guestbook xmlns=\"edu.tum.ase.servletapp\">\n");
        stringBuilder.append(guestbook
                .stream()
                .map(this::convertGreetingToXml)
                .reduce((a, b) -> a + b)
                .orElse(""));
        stringBuilder.append("</guestbook>");
        return stringBuilder.toString();
    }

    private String convertGreetingToXml(Greeting greeting) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("<?xml version=\"1.0\"?>\n");
        stringBuilder.append("<greeting xmlns=\"edu.tum.ase.servletapp\">\n");
        stringBuilder.append("<id>").append(greeting.getId()).append("</id>\n");
        stringBuilder.append("<content>").append(greeting.getContent()).append("</content>\n");
        stringBuilder.append("<author>").append(greeting.getAuthor()).append("</author>\n");
        stringBuilder.append("<date>").append(greeting.getDate()).append("</date>\n");
        stringBuilder.append("</greeting>");
        return stringBuilder.toString();
    }
}
