package com.backend.mae_backend.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "utilisateurs")
public class Utilisateur {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long userId;
  private String nom;
  private String prenom;
  private String email;
  private String motDePasse;
  private String adresse;
  private String numeroTelephone;
  private Date dateNaissance;

  @Enumerated(EnumType.STRING)
  private EtatCivil etatCivil;

  @Enumerated(EnumType.STRING)
  private Sexe sexe;

  @ManyToOne
  @JoinColumn(name = "code_id")
  private Code code;

  // create contructor
  public Utilisateur() {
  }

  public Utilisateur(String nom, String prenom, String email, String motDePasse, String adresse, String numeroTelephone, Date dateNaissance, EtatCivil etatCivil, Sexe sexe, Code code) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.adresse = adresse;
    this.numeroTelephone = numeroTelephone;
    this.dateNaissance = dateNaissance;
    this.etatCivil = etatCivil;
    this.sexe = sexe;
    this.code = code;
  }


  // Getters and Setters
  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public String getPrenom() {
    return prenom;
  }

  public void setPrenom(String prenom) {
    this.prenom = prenom;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getMotDePasse() {
    return motDePasse;
  }

  public void setMotDePasse(String motDePasse) {
    this.motDePasse = motDePasse;
  }

  public String getAdresse() {
    return adresse;
  }

  public void setAdresse(String adresse) {
    this.adresse = adresse;
  }

  public String getNumeroTelephone() {
    return numeroTelephone;
  }

  public void setNumeroTelephone(String numeroTelephone) {
    this.numeroTelephone = numeroTelephone;
  }

  public Date getDateNaissance() {
    return dateNaissance;
  }

  public void setDateNaissance(Date dateNaissance) {
    this.dateNaissance = dateNaissance;
  }

  public EtatCivil getEtatCivil() {
    return etatCivil;
  }

  public void setEtatCivil(EtatCivil etatCivil) {
    this.etatCivil = etatCivil;
  }

  public Sexe getSexe() {
    return sexe;
  }

  public void setSexe(Sexe sexe) {
    this.sexe = sexe;
  }

  public Code getCode() {
    return code;
  }

  public void setCode(Code code) {
    this.code = code;
  }

  public enum EtatCivil {
    celibataire, marie, divorce, veuf_veuve
  }

  public enum Sexe {
    homme, femme
  }
}
