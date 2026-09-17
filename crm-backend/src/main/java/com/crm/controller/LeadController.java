package com.crm.controller;
import com.crm.entity.Lead; import com.crm.service.LeadService; import org.springframework.http.ResponseEntity; import org.springframework.web.bind.annotation.*; import java.util.List;
@RestController @RequestMapping("/api/leads")
public class LeadController {
 private final LeadService service; public LeadController(LeadService service){this.service=service;}
 @GetMapping public ResponseEntity<List<Lead>> getAll(){return ResponseEntity.ok(service.getAll());}
 @GetMapping("/{id}") public ResponseEntity<Lead> getById(@PathVariable Long id){return service.getById(id).map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());}
 @PostMapping public ResponseEntity<Lead> create(@RequestBody Lead x){return ResponseEntity.ok(service.save(x));}
 @PutMapping("/{id}") public ResponseEntity<Lead> update(@PathVariable Long id,@RequestBody Lead x){return ResponseEntity.ok(service.update(id,x));}
 @DeleteMapping("/{id}") public ResponseEntity<Void> delete(@PathVariable Long id){service.delete(id);return ResponseEntity.noContent().build();}
}
