package com.crm.controller;
import com.crm.entity.User; import com.crm.service.UserService; import org.springframework.http.ResponseEntity; import org.springframework.web.bind.annotation.*; import java.util.Map;
@RestController @RequestMapping("/api/auth")
public class AuthController {
 private final UserService userService; public AuthController(UserService userService){this.userService=userService;}
 @PostMapping("/register") public ResponseEntity<?> register(@RequestBody User user){try{User saved=userService.register(user);saved.setPassword(null);return ResponseEntity.ok(saved);}catch(RuntimeException e){return ResponseEntity.badRequest().body(Map.of("message",e.getMessage()));}}
 @PostMapping("/login") public ResponseEntity<?> login(@RequestBody Map<String,String> request){var result=userService.login(request.get("email"),request.get("password"));if(result.isPresent()){User u=result.get();u.setPassword(null);return ResponseEntity.ok(u);}return ResponseEntity.status(401).body(Map.of("message","Invalid email or password"));}
 @PostMapping("/reset-password") public ResponseEntity<?> reset(@RequestBody Map<String,String> request){try{userService.resetPassword(request.get("email"),request.get("newPassword"));return ResponseEntity.ok(Map.of("message","Password reset successfully"));}catch(RuntimeException e){return ResponseEntity.badRequest().body(Map.of("message",e.getMessage()));}}
}
