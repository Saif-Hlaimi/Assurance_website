package com.backend.mae_backend.controller;

public class LoginRequest {
  private Code code;
  private String motDePasse;

  // Getters and setters

  public Code getCode() {
    return code;
  }

  public void setCode(Code code) {
    this.code = code;
  }

  public String getMotDePasse() {
    return motDePasse;
  }

  public void setMotDePasse(String motDePasse) {
    this.motDePasse = motDePasse;
  }

  public static class Code {
    private String codeAdherent;

    // Getters and setters

    public String getCodeAdherent() {
      return codeAdherent;
    }

    public void setCodeAdherent(String codeAdherent) {
      this.codeAdherent = codeAdherent;
    }
  }
}
