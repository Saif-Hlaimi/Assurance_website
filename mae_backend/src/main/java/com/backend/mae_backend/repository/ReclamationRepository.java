package com.backend.mae_backend.repository;

import com.backend.mae_backend.entity.Contrat;
import com.backend.mae_backend.entity.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {
  // get all the contract of a user by user id
  List<Contrat> findByUserId(Long userId);


}
