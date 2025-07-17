package com.backend.mae_backend.repository;

import com.backend.mae_backend.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
  Optional<Utilisateur> findByCode_CodeAdherentAndMotDePasse(String codeAdherent, String motDePasse);
  Optional<Utilisateur> findByEmail(String email);




}

