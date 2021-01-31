package edu.tum.ase.UIServer.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.stereotype.Component;

@Component
public class OAuth2RestTemplateConfiguration {
    @Bean
    public OAuth2RestOperations restTemplate(OAuth2ClientContext context) {
        ClientCredentialsResourceDetails details = new ClientCredentialsResourceDetails();
        return new OAuth2RestTemplate(details, context);
    }
}
