package com.crm.controller;
import com.crm.entity.Task; import com.crm.service.TaskService; import org.springframework.http.ResponseEntity; import org.springframework.web.bind.annotation.*; import java.util.List;
@RestController @RequestMapping("/api/tasks")
public class TaskController {
 private final TaskService service; public TaskController(TaskService service){this.service=service;}
 @GetMapping public ResponseEntity<List<Task>> getAll(){return ResponseEntity.ok(service.getAll());}
 @GetMapping("/{id}") public ResponseEntity<Task> getById(@PathVariable Long id){return service.getById(id).map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());}
 @PostMapping public ResponseEntity<Task> create(@RequestBody Task x){return ResponseEntity.ok(service.save(x));}
 @PutMapping("/{id}") public ResponseEntity<Task> update(@PathVariable Long id,@RequestBody Task x){return ResponseEntity.ok(service.update(id,x));}
 @DeleteMapping("/{id}") public ResponseEntity<Void> delete(@PathVariable Long id){service.delete(id);return ResponseEntity.noContent().build();}
}
