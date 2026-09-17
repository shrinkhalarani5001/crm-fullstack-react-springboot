package com.crm.controller;
import com.crm.entity.Deal; import com.crm.service.DealService; import org.springframework.http.ResponseEntity; import org.springframework.web.bind.annotation.*; import java.util.List;
@RestController @RequestMapping("/api/deals")
public class DealController {
 private final DealService service; public DealController(DealService service){this.service=service;}
 @GetMapping public ResponseEntity<List<Deal>> getAll(){return ResponseEntity.ok(service.getAll());}
 @GetMapping("/{id}") public ResponseEntity<Deal> getById(@PathVariable Long id){return service.getById(id).map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());}
 @PostMapping public ResponseEntity<Deal> create(@RequestBody Deal x){return ResponseEntity.ok(service.save(x));}
 @PutMapping("/{id}") public ResponseEntity<Deal> update(@PathVariable Long id,@RequestBody Deal x){return ResponseEntity.ok(service.update(id,x));}
 @DeleteMapping("/{id}") public ResponseEntity<Void> delete(@PathVariable Long id){service.delete(id);return ResponseEntity.noContent().build();}
}
