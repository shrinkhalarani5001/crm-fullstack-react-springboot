package com.crm.config;
import com.crm.entity.User; import com.crm.repository.UserRepository; import org.springframework.boot.CommandLineRunner; import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration;
@Configuration
public class DataInitializer {
 @Bean CommandLineRunner seed(UserRepository repo){return args->{if(!repo.existsByEmail("demo@crm.com")){User u=new User();u.setFullName("Demo User");u.setEmail("demo@crm.com");u.setPassword("demo123");u.setRole("ADMIN");repo.save(u);}};}
}
