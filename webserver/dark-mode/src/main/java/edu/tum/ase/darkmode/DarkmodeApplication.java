package edu.tum.ase.darkmode;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@EnableEurekaClient
@RestController
public class DarkmodeApplication {
  private static boolean dark = false;
  private static long time = System.currentTimeMillis();

  public static void main(String[] args) { SpringApplication.run(DarkmodeApplication.class, args);
  }

  @RequestMapping(path = "/dark-mode/toggle", method = RequestMethod.GET) public void toggleDarkMode() {
    long new_time = System.currentTimeMillis();
    if(new_time - time > 3000){
      dark = !dark;
      time = new_time;
    }
  }
  @RequestMapping(path = "/dark-mode", method = RequestMethod.GET) public boolean getDarkMode() {
    return dark;
  }
}

