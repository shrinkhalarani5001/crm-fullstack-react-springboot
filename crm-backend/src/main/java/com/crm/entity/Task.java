package com.crm.entity;
import jakarta.persistence.*; import java.time.LocalDate; import java.time.LocalDateTime;
@Entity @Table(name="tasks")
public class Task {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String title; @Column(length=2000) private String description;
 private LocalDate dueDate; private String priority,status; private Long customerId,leadId; private LocalDateTime createdAt;
 @PrePersist public void prePersist(){createdAt=LocalDateTime.now();if(priority==null||priority.isBlank())priority="MEDIUM";if(status==null||status.isBlank())status="PENDING";}
 public Task(){} public Long getId(){return id;} public String getTitle(){return title;} public void setTitle(String v){title=v;} public String getDescription(){return description;} public void setDescription(String v){description=v;}
 public LocalDate getDueDate(){return dueDate;} public void setDueDate(LocalDate v){dueDate=v;} public String getPriority(){return priority;} public void setPriority(String v){priority=v;} public String getStatus(){return status;} public void setStatus(String v){status=v;}
 public Long getCustomerId(){return customerId;} public void setCustomerId(Long v){customerId=v;} public Long getLeadId(){return leadId;} public void setLeadId(Long v){leadId=v;} public LocalDateTime getCreatedAt(){return createdAt;}
}
