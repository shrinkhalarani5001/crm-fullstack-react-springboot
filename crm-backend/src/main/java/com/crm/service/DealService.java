package com.crm.service;
import com.crm.entity.Deal; import com.crm.repository.DealRepository; import org.springframework.stereotype.Service; import java.util.*;
@Service public class DealService {
 private final DealRepository repository; public DealService(DealRepository repository){this.repository=repository;}
 public List<Deal> getAll(){return repository.findAll();} public Optional<Deal> getById(Long id){return repository.findById(id);} public Deal save(Deal x){return repository.save(x);}
 public Deal update(Long id,Deal u){Deal x=repository.findById(id).orElseThrow(()->new RuntimeException("Deal not found"));x.setTitle(u.getTitle());x.setCustomerId(u.getCustomerId());x.setAmount(u.getAmount());x.setStage(u.getStage());x.setStatus(u.getStatus());x.setCloseDate(u.getCloseDate());return repository.save(x);}
 public void delete(Long id){repository.deleteById(id);}
}
