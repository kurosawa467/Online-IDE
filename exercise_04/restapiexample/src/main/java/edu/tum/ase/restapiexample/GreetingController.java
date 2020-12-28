package edu.tum.ase.restapiexample;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private List<Greeting> greetingList = new ArrayList<Greeting>();

    @RequestMapping(method = RequestMethod.GET, path = "/greeting")
    //@GetMapping(path = "/greeting")
    public List<Greeting> listAllGreetings() {
        return greetingList;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/greeting")
    public Greeting addGreeting(@RequestBody Greeting greeting) {
        Greeting g = new Greeting(counter.incrementAndGet(),
                String.format(template, greeting.getContent()));
        greetingList.add(g);
        return g;
    }


}
