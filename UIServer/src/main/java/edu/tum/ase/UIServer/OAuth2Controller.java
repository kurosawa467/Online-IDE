package edu.tum.ase.UIServer;

import com.fasterxml.jackson.databind.JsonNode;
import edu.tum.ase.UIServer.Configuration.ymlConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.List;

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
        User currentUser = new User(false, new String(""));
        if (authentication != null) {
            boolean isAuthenticated = authentication.getAuthorities().stream()
                    .noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ROLE_ANONYMOUS"));
            currentUser.setAuthenticated(isAuthenticated);

            // get username
            String username = "";
            String gitlabUserSearchUri = ymlConfig.getUserInfoUri();
            System.out.println("gitlabUserSearchUri is " + gitlabUserSearchUri);
            JsonNode userJsonNode = restTemplate.getForObject(gitlabUserSearchUri, JsonNode.class);
            if (!userJsonNode.isNull()) {
                username = userJsonNode.get("name").asText();
            }
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

    @GetMapping("/validUsername/{username}")
    public boolean getUsernameValidation(@PathVariable String username) {
        boolean validUsername = false;
        String gitlabUserSearchUri = "https://gitlab.lrz.de/api/v4/users/" + username;
        JsonNode userJsonNode = restTemplate.getForObject(gitlabUserSearchUri, JsonNode.class);
        if (!userJsonNode.isNull()) {
            validUsername = userJsonNode.get("state").asText() == "active";
        }
        return validUsername;
    }
}
