package com.backend.mae_backend.Services;

import com.backend.mae_backend.entity.Code;
import com.backend.mae_backend.entity.Utilisateur;
import com.backend.mae_backend.repository.CodeRepository;
import com.backend.mae_backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UtilisateurService {

  @Autowired
  private UtilisateurRepository utilisateurRepository;

  @Autowired
  private CodeRepository codeRepository;

  @Autowired
  private SmsService smsService;

  public Utilisateur createUtilisateur(Utilisateur utilisateur) {
    // Vérifiez si l'e-mail existe déjà
    if (emailExists(utilisateur.getEmail())) {
      throw new IllegalArgumentException("Email already exists");
    }

    // Générer un code adhérent unique
    String generatedCode = generateUniqueCodeAdherent();
    Code code = new Code(generatedCode);
    codeRepository.save(code);

    // Associer le code adhérent à l'utilisateur
    utilisateur.setCode(code);
    Utilisateur savedUtilisateur = utilisateurRepository.save(utilisateur);

    // Envoyer le code adhérent par SMS
    String message = "Votre code adhérent est : " + generatedCode;
    smsService.sendSms(utilisateur.getNumeroTelephone(), message);

    return savedUtilisateur;
  }

  public boolean emailExists(String email) {
    return utilisateurRepository.findByEmail(email).isPresent();
  }

  public List<Utilisateur> getAllUtilisateurs() {
    return utilisateurRepository.findAll();
  }

  public Optional<Utilisateur> getUtilisateurById(Long id) {
    return utilisateurRepository.findById(id);
  }

  public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
    return utilisateurRepository.save(utilisateur);
  }

  public void deleteUtilisateur(Utilisateur utilisateur) {
    utilisateurRepository.delete(utilisateur);
  }

  public Optional<Utilisateur> authenticate(String codeAdherent, String motDePasse) {
    return utilisateurRepository.findByCode_CodeAdherentAndMotDePasse(codeAdherent, motDePasse);
  }

  private String generateUniqueCodeAdherent() {
    return UUID.randomUUID().toString().substring(0, 8);
  }
}
