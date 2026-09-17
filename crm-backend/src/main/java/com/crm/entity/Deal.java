package com.crm.entity;
import jakarta.persistence.*; import java.time.LocalDate; import java.time.LocalDateTime;
@Entity @Table(name="deals")
public class Deal {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String title; private Long customerId; private Double amount; private String stage,status; private LocalDate closeDate; private LocalDateTime createdAt;
 @PrePersist public void prePersist(){createdAt=LocalDateTime.now();if(stage==null||stage.isBlank())stage="PROSPECTING";if(status==null||status.isBlank())status="OPEN";}
 public Deal(){} public Long getId(){return id;} public String getTitle(){return title;} public void setTitle(String v){title=v;} public Long getCustomerId(){return customerId;} public void setCustomerId(Long v){customerId=v;}
 public Double getAmount(){return amount;} public void setAmount(Double v){amount=v;} public String getStage(){return stage;} public void setStage(String v){stage=v;} public String getStatus(){return status;} public void setStatus(String v){status=v;}
 public LocalDate getCloseDate(){return closeDate;} public void setCloseDate(LocalDate v){closeDate=v;} public LocalDateTime getCreatedAt(){return createdAt;}
}
