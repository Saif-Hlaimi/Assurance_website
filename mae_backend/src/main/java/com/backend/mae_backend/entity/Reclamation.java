package com.backend.mae_backend.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reclamations")
public class Reclamation {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long reclamationId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private Utilisateur utilisateur;

  @ManyToOne
  @JoinColumn(name = "contrat_id")
  private Contrat contrat;

  @Temporal(TemporalType.DATE)
  private Date dateReclamation;

  private String description;

  @Column(nullable = false)
  private String statut;

  @Column(name = "user_id", insertable = false, updatable = false)
  private Long userId;

  private String nomPrenom;
  private String telephone;
  private String email;
  private String categorie;
  private String sujet;

  // Getters and Setters
  public Long getReclamationId() {
    return reclamationId;
  }

  public void setReclamationId(Long reclamationId) {
    this.reclamationId = reclamationId;
  }

  public Utilisateur getUtilisateur() {
    return utilisateur;
  }

  public void setUtilisateur(Utilisateur utilisateur) {
    this.utilisateur = utilisateur;
  }

  public Contrat getContrat() {
    return contrat;
  }

  public void setContrat(Contrat contrat) {
    this.contrat = contrat;
  }

  public Date getDateReclamation() {
    return dateReclamation;
  }

  public void setDateReclamation(Date dateReclamation) {
    this.dateReclamation = dateReclamation;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getStatut() {
    return statut;
  }

  public void setStatut(String statut) {
    this.statut = statut;
  }

  public String getNomPrenom() {
    return nomPrenom;
  }

  public void setNomPrenom(String nomPrenom) {
    this.nomPrenom = nomPrenom;
  }

  public String getTelephone() {
    return telephone;
  }

  public void setTelephone(String telephone) {
    this.telephone = telephone;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getCategorie() {
    return categorie;
  }

  public void setCategorie(String categorie) {
    this.categorie = categorie;
  }

  public String getSujet() {
    return sujet;
  }

  public void setSujet(String sujet) {
    this.sujet = sujet;
  }
}
