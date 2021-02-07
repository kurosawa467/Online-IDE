package edu.tum.ase.gateway;

import com.fasterxml.jackson.databind.JsonNode;
import edu.tum.ase.gateway.configuration.ymlConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

@CrossOrigin
@RestController
public class OAuth2Controller {
  @Autowired
  private OAuth2RestOperations restTemplate;

  @Autowired
  private ymlConfiguration ymlConfig;

  // curl --header "PRIVATE-TOKEN: <your_access_token>" "https://gitlab.example.com/api/v4/search?scope=users&search=doe"

  @GetMapping("/authenticated")
  public User authenticated() {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = securityContext.getAuthentication();
    User currentUser = new User(false, new String(""), new String(""));
    if (authentication != null) {
      boolean isAuthenticated = authentication.getAuthorities().stream()
        .noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ROLE_ANONYMOUS"));
      currentUser.setAuthenticated(isAuthenticated);

      // get user id and name
      String userId = "";
      String username = "";
      String gitlabUserSearchUri = ymlConfig.getUserInfoUri();
      JsonNode userJsonNode = restTemplate.getForObject(gitlabUserSearchUri, JsonNode.class);
      if (!userJsonNode.isNull()) {
        userId = userJsonNode.get("id").asText();
        username = userJsonNode.get("name").asText();
      }
      currentUser.setUserId(userId);
      currentUser.setUsername(username);
    }
    return currentUser;
  }

  @GetMapping("/getUsername")
  public String getUsername() {
    String username = "";
    String gitlabUserSearchUri = ymlConfig.getUserInfoUri();
    System.out.println("gitlabUserSearchUri is " + gitlabUserSearchUri);
    JsonNode userJsonNode = restTemplate.getForObject(gitlabUserSearchUri, JsonNode.class);
    if (!userJsonNode.isNull()) {
      username = userJsonNode.get("name").asText();
      return username;
    }
    System.out.println("username is " + username);
    return username;
  }

  @GetMapping("/validUserId/{userId}")
  public String getUsernameValidation(@PathVariable String userId) {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = securityContext.getAuthentication();
    authentication.getAuthorities().stream()
      .noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ROLE_ANONYMOUS"));
    String gitlabUserSearchUri = "https://gitlab.lrz.de/api/v4/users/" + userId;
    System.out.println("getUsernameValidation userId is " + userId);
    JsonNode userJsonNode = null;
    String sharedUsername = "INVALID";

    try {
      userJsonNode = restTemplate.getForObject(gitlabUserSearchUri, JsonNode.class);
      if (!userJsonNode.isNull()) {
        if (userJsonNode.get("state").asText().equals(new String("active"))) {
          sharedUsername = userJsonNode.get("name").asText();
        }
        System.out.println(sharedUsername);
      } else {
        System.out.println("userJsonNode is null");
      }
    } catch (HttpClientErrorException e) {
      System.out.println(e);
    }

    return sharedUsername;
  }
}
