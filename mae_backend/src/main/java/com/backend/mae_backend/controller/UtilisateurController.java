
package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Utilisateur;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.Services.UtilisateurService;
import com.backend.mae_backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

  import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurController {

  @Autowired
  private UtilisateurService utilisateurService;

  @GetMapping("/utilisateurs")
  public List<Utilisateur> getAllUtilisateurs() {
    return utilisateurService.getAllUtilisateurs();
  }

  @PostMapping("/utilisateurs")
  public ResponseEntity<?> createUtilisateur(@RequestBody Utilisateur utilisateur) {
    try {
      Utilisateur newUtilisateur = utilisateurService.createUtilisateur(utilisateur);
      return ResponseEntity.ok(newUtilisateur);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    }
  }

  @GetMapping("/utilisateurs/{id}")
  public ResponseEntity<Utilisateur> getUtilisateurById(@PathVariable Long id) {
    Utilisateur utilisateur = utilisateurService.getUtilisateurById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found with id " + id));
    return ResponseEntity.ok(utilisateur);
  }

  @PutMapping("/utilisateurs/{id}")
  public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur utilisateurDetails) {
    Utilisateur utilisateur = utilisateurService.getUtilisateurById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found with id " + id));

    utilisateur.setNom(utilisateurDetails.getNom());
    utilisateur.setPrenom(utilisateurDetails.getPrenom());
    utilisateur.setEmail(utilisateurDetails.getEmail());
    utilisateur.setMotDePasse(utilisateurDetails.getMotDePasse());
    utilisateur.setAdresse(utilisateurDetails.getAdresse());
    utilisateur.setNumeroTelephone(utilisateurDetails.getNumeroTelephone());
    utilisateur.setDateNaissance(utilisateurDetails.getDateNaissance());
    utilisateur.setEtatCivil(utilisateurDetails.getEtatCivil());
    utilisateur.setSexe(utilisateurDetails.getSexe());
    utilisateur.setCode(utilisateurDetails.getCode());

    Utilisateur updatedUtilisateur = utilisateurService.updateUtilisateur(utilisateur);
    return ResponseEntity.ok(updatedUtilisateur);
  }

  @DeleteMapping("/utilisateurs/{id}")
  public ResponseEntity<Void> deleteUtilisateur(@PathVariable Long id) {
    Utilisateur utilisateur = utilisateurService.getUtilisateurById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found with id " + id));

    utilisateurService.deleteUtilisateur(utilisateur);
    return ResponseEntity.noContent().build();
  }

  @PostMapping("/login")
  public ResponseEntity<Utilisateur> login(@RequestBody Utilisateur utilisateur) {
    Optional<Utilisateur> authenticatedUser = utilisateurService.authenticate(utilisateur.getCode().getCodeAdherent(), utilisateur.getMotDePasse());
    return authenticatedUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
  }
}
