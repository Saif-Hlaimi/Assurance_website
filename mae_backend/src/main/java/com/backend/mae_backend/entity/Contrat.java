package com.backend.mae_backend.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Contrats")
public class Contrat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long contratId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private Utilisateur utilisateur;

  @Column(name = "user_id", insertable = false, updatable = false)
  private Long userId;

  @ManyToOne
  @JoinColumn(name = "assurance_id")
  private Assurance assurance;

  private Date dateDebut;
  private Date dateFin;
  private Double montantTotal;

  // Getters and Setters
  public Long getContratId() {
    return contratId;
  }

  public void setContratId(Long contratId) {
    this.contratId = contratId;
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

  public Date getDateDebut() {
    return dateDebut;
  }

  public void setDateDebut(Date dateDebut) {
    this.dateDebut = dateDebut;
  }

  public Date getDateFin() {
    return dateFin;
  }

  public void setDateFin(Date dateFin) {
    this.dateFin = dateFin;
  }

  public Double getMontantTotal() {
    return montantTotal;
  }

  public void setMontantTotal(Double montantTotal) {
    this.montantTotal = montantTotal;
  }
}
