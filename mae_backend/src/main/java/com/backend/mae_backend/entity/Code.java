package com.backend.mae_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "codes")
public class Code {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long codeId;
  private String codeAdherent;

  // No-argument constructor
  public Code() {
  }

  // Constructor with arguments
  public Code(String codeAdherent) {
    this.codeAdherent = codeAdherent;
  }

  // Getters and setters
  public Long getCodeId() {
    return codeId;
  }

  public void setCodeId(Long codeId) {
    this.codeId = codeId;
  }

  public String getCodeAdherent() {
    return codeAdherent;
  }

  public void setCodeAdherent(String codeAdherent) {
    this.codeAdherent = codeAdherent;
  }
}
