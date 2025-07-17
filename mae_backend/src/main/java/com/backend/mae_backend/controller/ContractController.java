package com.backend.mae_backend.controller;

import com.backend.mae_backend.Services.ContratService;
import com.backend.mae_backend.entity.Contrat;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contrats")
@CrossOrigin(origins = "http://localhost:4200")
public class ContractController {

  @Autowired
  private ContratRepository contratRepository;
  @Autowired
  private ContratService contratService;

  @GetMapping
  public List<Contrat> getAllContrats() {
    return contratRepository.findAll();
  }


  @PostMapping("/create")
  public ResponseEntity<Contrat> createContrat(@RequestBody Map<String, Long> request) {
    try {
      Long devisId = request.get("devisId");
      Contrat contrat = contratService.createContrat(devisId);
      return ResponseEntity.ok(contrat);
    } catch (ResourceNotFoundException e) {
      return ResponseEntity.status(404).body(null);
    } catch (Exception e) {
      return ResponseEntity.status(500).body(null);
    }
  }


  @GetMapping("/{id}")
  public ResponseEntity<Contrat> getContratById(@PathVariable Long id) {
    Contrat contrat = contratRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Contrat not found with id " + id));
    return ResponseEntity.ok(contrat);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Contrat> updateContrat(@PathVariable Long id, @RequestBody Contrat contratDetails) {
    Contrat contrat = contratRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Contrat not found with id " + id));

    contrat.setUtilisateur(contratDetails.getUtilisateur());
    contrat.setAssurance(contratDetails.getAssurance());
    contrat.setDateDebut(contratDetails.getDateDebut());
    contrat.setDateFin(contratDetails.getDateFin());
    contrat.setMontantTotal(contratDetails.getMontantTotal());

    Contrat updatedContrat = contratRepository.save(contrat);
    return ResponseEntity.ok(updatedContrat);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteContrat(@PathVariable Long id) {
    Contrat contrat = contratRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Contrat not found with id " + id));

    contratRepository.delete(contrat);
    return ResponseEntity.noContent().build();
  }
}
