package edu.tum.ase.UIServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient

public class UiServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UiServerApplication.class, args);
	}

}
