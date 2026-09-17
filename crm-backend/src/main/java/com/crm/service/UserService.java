package com.crm.service;
import com.crm.entity.User; import com.crm.repository.UserRepository; import org.springframework.stereotype.Service; import java.util.Optional;
@Service public class UserService {
 private final UserRepository repository; public UserService(UserRepository repository){this.repository=repository;}
 public User register(User user){if(repository.existsByEmail(user.getEmail()))throw new RuntimeException("Email already registered");return repository.save(user);}
 public Optional<User> login(String email,String password){return repository.findByEmail(email).filter(u->u.getPassword().equals(password));}
 public User resetPassword(String email,String newPassword){User u=repository.findByEmail(email).orElseThrow(()->new RuntimeException("Email not found"));u.setPassword(newPassword);return repository.save(u);}
}
