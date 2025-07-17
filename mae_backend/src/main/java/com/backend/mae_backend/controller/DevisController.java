package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Devis;
import com.backend.mae_backend.entity.Utilisateur;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.DevisRepository;
import com.backend.mae_backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/devis")
@CrossOrigin(origins = "http://localhost:4200")
public class DevisController {

  @Autowired
  private DevisRepository devisRepository;

  @Autowired
  private UtilisateurRepository utilisateurRepository;

  @GetMapping
  public ResponseEntity<List<Devis>> getAllDevis() {
    try {
      List<Devis> devisList = devisRepository.findAll();
      return ResponseEntity.ok(devisList);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @PostMapping
  public ResponseEntity<?> createDevis(@RequestBody Devis devis) {
    try {
      // Validation des données
      if (devis.getUtilisateur() == null || devis.getAssurance() == null) {
        return ResponseEntity.badRequest().body("Utilisateur ou assurance manquants");
      }

      // Validation de l'existence de l'utilisateur
      Utilisateur utilisateur = utilisateurRepository.findById(devis.getUtilisateur().getUserId())
        .orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found with id " + devis.getUtilisateur().getUserId()));

      devis.setUtilisateur(utilisateur);

      Devis savedDevis = devisRepository.save(devis);
      return ResponseEntity.ok(savedDevis);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body("Erreur lors de la création du devis : " + e.getMessage());
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getDevisById(@PathVariable Long id) {
    try {
      Devis devis = devisRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Devis not found with id " + id));
      return ResponseEntity.ok(devis);
    } catch (ResourceNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(e.getMessage());
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body("Erreur lors de la récupération du devis : " + e.getMessage());
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateDevis(@PathVariable Long id, @RequestBody Devis devisDetails) {
    try {
      Devis devis = devisRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Devis not found with id " + id));

      devis.setUtilisateur(devisDetails.getUtilisateur());
      devis.setAssurance(devisDetails.getAssurance());
      devis.setDateDevis(devisDetails.getDateDevis());
      devis.setMontant(devisDetails.getMontant());

      Devis updatedDevis = devisRepository.save(devis);
      return ResponseEntity.ok(updatedDevis);
    } catch (ResourceNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(e.getMessage());
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body("Erreur lors de la mise à jour du devis : " + e.getMessage());
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteDevis(@PathVariable Long id) {
    try {
      Devis devis = devisRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Devis not found with id " + id));

      devisRepository.delete(devis);
      return ResponseEntity.noContent().build();
    } catch (ResourceNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(e.getMessage());
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body("Erreur lors de la suppression du devis : " + e.getMessage());
    }
  }
}
