package com.crm.service;
import com.crm.entity.Task; import com.crm.repository.TaskRepository; import org.springframework.stereotype.Service; import java.util.*;
@Service public class TaskService {
 private final TaskRepository repository; public TaskService(TaskRepository repository){this.repository=repository;}
 public List<Task> getAll(){return repository.findAll();} public Optional<Task> getById(Long id){return repository.findById(id);} public Task save(Task x){return repository.save(x);}
 public Task update(Long id,Task u){Task x=repository.findById(id).orElseThrow(()->new RuntimeException("Task not found"));x.setTitle(u.getTitle());x.setDescription(u.getDescription());x.setDueDate(u.getDueDate());x.setPriority(u.getPriority());x.setStatus(u.getStatus());x.setCustomerId(u.getCustomerId());x.setLeadId(u.getLeadId());return repository.save(x);}
 public void delete(Long id){repository.deleteById(id);}
}
