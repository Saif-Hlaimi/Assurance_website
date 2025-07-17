package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Assurance;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.AssuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assurances")
@CrossOrigin(origins = "http://localhost:4200")
public class AssuranceController {

  @Autowired
  private AssuranceRepository assuranceRepository;

  @GetMapping
  public List<Assurance> getAllAssurances() {
    return assuranceRepository.findAll();
  }

  @PostMapping
  public Assurance createAssurance(@RequestBody Assurance assurance) {
    return assuranceRepository.save(assurance);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Assurance> getAssuranceById(@PathVariable Long id) {
    Assurance assurance = assuranceRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Assurance not found with id " + id));
    return ResponseEntity.ok(assurance);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Assurance> updateAssurance(@PathVariable Long id, @RequestBody Assurance assuranceDetails) {
    Assurance assurance = assuranceRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Assurance not found with id " + id));

    assurance.setTypeAssurance(assuranceDetails.getTypeAssurance());
    assurance.setDescription(assuranceDetails.getDescription());
    assurance.setTarifBase(assuranceDetails.getTarifBase());

    Assurance updatedAssurance = assuranceRepository.save(assurance);
    return ResponseEntity.ok(updatedAssurance);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteAssurance(@PathVariable Long id) {
    Assurance assurance = assuranceRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Assurance not found with id " + id));

    assuranceRepository.delete(assurance);
    return ResponseEntity.noContent().build();
  }
}
