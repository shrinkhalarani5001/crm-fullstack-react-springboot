package com.crm.service;
import com.crm.entity.Customer; import com.crm.repository.CustomerRepository; import org.springframework.stereotype.Service; import java.util.*;
@Service public class CustomerService {
 private final CustomerRepository repository; public CustomerService(CustomerRepository repository){this.repository=repository;}
 public List<Customer> getAll(){return repository.findAll();} public Optional<Customer> getById(Long id){return repository.findById(id);} public Customer save(Customer x){return repository.save(x);}
 public Customer update(Long id,Customer u){Customer x=repository.findById(id).orElseThrow(()->new RuntimeException("Customer not found"));x.setName(u.getName());x.setEmail(u.getEmail());x.setPhone(u.getPhone());x.setCompany(u.getCompany());x.setStatus(u.getStatus());x.setSource(u.getSource());x.setNotes(u.getNotes());return repository.save(x);}
 public void delete(Long id){repository.deleteById(id);}
}
