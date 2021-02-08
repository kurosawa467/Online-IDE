package edu.tum.ase.gateway.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Configuration
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "security.oauth2.resource")
public class YmlConfiguration {

  private String userInfoUri = "https://gitlab.lrz.de/api/v4/user";

  public String getUserInfoUri() {
    return this.userInfoUri;
  }

  public void setUserInfoUri(String userInfoUri) {
    this.userInfoUri = userInfoUri;
  }
}
