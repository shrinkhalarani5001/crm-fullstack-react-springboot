package com.crm.controller;
import com.crm.entity.Customer; import com.crm.service.CustomerService; import org.springframework.http.ResponseEntity; import org.springframework.web.bind.annotation.*; import java.util.List;
@RestController @RequestMapping("/api/customers")
public class CustomerController {
 private final CustomerService service; public CustomerController(CustomerService service){this.service=service;}
 @GetMapping public ResponseEntity<List<Customer>> getAll(){return ResponseEntity.ok(service.getAll());}
 @GetMapping("/{id}") public ResponseEntity<Customer> getById(@PathVariable Long id){return service.getById(id).map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());}
 @PostMapping public ResponseEntity<Customer> create(@RequestBody Customer x){return ResponseEntity.ok(service.save(x));}
 @PutMapping("/{id}") public ResponseEntity<Customer> update(@PathVariable Long id,@RequestBody Customer x){return ResponseEntity.ok(service.update(id,x));}
 @DeleteMapping("/{id}") public ResponseEntity<Void> delete(@PathVariable Long id){service.delete(id);return ResponseEntity.noContent().build();}
}
