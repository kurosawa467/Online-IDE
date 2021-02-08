package edu.tum.ase.gateway;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@Controller
public class GatewayController {

  @GetMapping(path = "/")
  public String index(){
      return "forward:/ui/";
  }
}
