package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Contrat;
import com.backend.mae_backend.entity.Reclamation;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.ContratRepository;
import com.backend.mae_backend.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/reclamations")
@CrossOrigin(origins = "http://localhost:4200")
public class ReclamationController {

  @Autowired
  private ReclamationRepository reclamationRepository;
  @Autowired
  private ContratRepository contratRepository;

  @GetMapping
  public List<Reclamation> getAllReclamations() {
    return reclamationRepository.findAll();
  }

  @GetMapping("/utilisateurs/{userId}/contrats")
  public List<Contrat> getUserContracts(@PathVariable Long userId) {
    return contratRepository.findByUserId(userId);
  }

  @PostMapping
  public ResponseEntity<Reclamation> createReclamation(@RequestBody Reclamation reclamation) {
    if (reclamation.getDateReclamation() == null) {
      reclamation.setDateReclamation(new Date()); // Set the current date if not specified
    }
    if (reclamation.getStatut() == null) {
      reclamation.setStatut("Pending"); // Set a default value for statut if not specified
    }
    Reclamation savedReclamation = reclamationRepository.save(reclamation);
    return ResponseEntity.ok(savedReclamation);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Reclamation> getReclamationById(@PathVariable Long id) {
    Reclamation reclamation = reclamationRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Reclamation not found with id " + id));
    return ResponseEntity.ok(reclamation);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Reclamation> updateReclamation(@PathVariable Long id, @RequestBody Reclamation reclamationDetails) {
    Reclamation reclamation = reclamationRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Reclamation not found with id " + id));

    reclamation.setUtilisateur(reclamationDetails.getUtilisateur());
    reclamation.setContrat(reclamationDetails.getContrat());
    reclamation.setDateReclamation(reclamationDetails.getDateReclamation());
    reclamation.setDescription(reclamationDetails.getDescription());
    reclamation.setStatut(reclamationDetails.getStatut());

    Reclamation updatedReclamation = reclamationRepository.save(reclamation);
    return ResponseEntity.ok(updatedReclamation);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteReclamation(@PathVariable Long id) {
    Reclamation reclamation = reclamationRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Reclamation not found with id " + id));

    reclamationRepository.delete(reclamation);
    return ResponseEntity.noContent().build();
  }
}
