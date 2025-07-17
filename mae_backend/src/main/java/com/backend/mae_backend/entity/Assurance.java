package com.backend.mae_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "assurances")
public class Assurance {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long assuranceId;
  private String typeAssurance;
  private String description;
  private Double tarifBase;

  // Getters and Setters
  public Long getAssuranceId() {
    return assuranceId;
  }

  public void setAssuranceId(Long assuranceId) {
    this.assuranceId = assuranceId;
  }

  public String getTypeAssurance() {
    return typeAssurance;
  }

  public void setTypeAssurance(String typeAssurance) {
    this.typeAssurance = typeAssurance;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Double getTarifBase() {
    return tarifBase;
  }

  public void setTarifBase(Double tarifBase) {
    this.tarifBase = tarifBase;
  }
}
