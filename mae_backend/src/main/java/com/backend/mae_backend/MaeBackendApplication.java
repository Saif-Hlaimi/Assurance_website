package com.backend.mae_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.backend.mae_backend.repository")
public class MaeBackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(MaeBackendApplication.class, args);
  }
}
