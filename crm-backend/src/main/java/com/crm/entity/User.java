package com.crm.entity;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity @Table(name="users")
public class User {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String fullName;
 @Column(nullable=false,unique=true) private String email;
 @Column(nullable=false) private String password;
 private String role; private LocalDateTime createdAt;
 @PrePersist public void prePersist(){createdAt=LocalDateTime.now();if(role==null||role.isBlank())role="USER";}
 public User(){}
 public Long getId(){return id;} public String getFullName(){return fullName;} public void setFullName(String v){fullName=v;}
 public String getEmail(){return email;} public void setEmail(String v){email=v;} public String getPassword(){return password;} public void setPassword(String v){password=v;}
 public String getRole(){return role;} public void setRole(String v){role=v;} public LocalDateTime getCreatedAt(){return createdAt;}
}
