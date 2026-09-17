package com.crm.entity;
import jakarta.persistence.*; import java.time.LocalDateTime;
@Entity @Table(name="customers")
public class Customer {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String name; private String email,phone,company,status,source;
 @Column(length=2000) private String notes; private LocalDateTime createdAt;
 @PrePersist public void prePersist(){createdAt=LocalDateTime.now();if(status==null||status.isBlank())status="ACTIVE";}
 public Customer(){} public Long getId(){return id;} public String getName(){return name;} public void setName(String v){name=v;}
 public String getEmail(){return email;} public void setEmail(String v){email=v;} public String getPhone(){return phone;} public void setPhone(String v){phone=v;}
 public String getCompany(){return company;} public void setCompany(String v){company=v;} public String getStatus(){return status;} public void setStatus(String v){status=v;}
 public String getSource(){return source;} public void setSource(String v){source=v;} public String getNotes(){return notes;} public void setNotes(String v){notes=v;}
 public LocalDateTime getCreatedAt(){return createdAt;}
}
