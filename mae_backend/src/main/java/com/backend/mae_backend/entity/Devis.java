package com.backend.mae_backend.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "devis")
public class Devis {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long devisId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private Utilisateur utilisateur;

  @ManyToOne
  @JoinColumn(name = "assurance_id")
  private Assurance assurance;

  private Date dateDevis;
  private Double montant;

  // Getters and Setters
  public Long getDevisId() {
    return devisId;
  }

  public void setDevisId(Long devisId) {
    this.devisId = devisId;
  }

  public Utilisateur getUtilisateur() {
    return utilisateur;
  }

  public void setUtilisateur(Utilisateur utilisateur) {
    this.utilisateur = utilisateur;
  }

  public Assurance getAssurance() {
    return assurance;
  }

  public void setAssurance(Assurance assurance) {
    this.assurance = assurance;
  }

  public Date getDateDevis() {
    return dateDevis;
  }

  public void setDateDevis(Date dateDevis) {
    this.dateDevis = dateDevis;
  }

  public Double getMontant() {
    return montant;
  }

  public void setMontant(Double montant) {
    this.montant = montant;
  }
}
