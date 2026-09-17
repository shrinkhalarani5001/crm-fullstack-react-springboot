package com.crm.service;
import com.crm.entity.Lead; import com.crm.repository.LeadRepository; import org.springframework.stereotype.Service; import java.util.*;
@Service public class LeadService {
 private final LeadRepository repository; public LeadService(LeadRepository repository){this.repository=repository;}
 public List<Lead> getAll(){return repository.findAll();} public Optional<Lead> getById(Long id){return repository.findById(id);} public Lead save(Lead x){return repository.save(x);}
 public Lead update(Long id,Lead u){Lead x=repository.findById(id).orElseThrow(()->new RuntimeException("Lead not found"));x.setName(u.getName());x.setEmail(u.getEmail());x.setPhone(u.getPhone());x.setCompany(u.getCompany());x.setStatus(u.getStatus());x.setSource(u.getSource());x.setNotes(u.getNotes());return repository.save(x);}
 public void delete(Long id){repository.deleteById(id);}
}
