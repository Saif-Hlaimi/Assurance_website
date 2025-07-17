package com.backend.mae_backend.repository;

import com.backend.mae_backend.entity.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ContratRepository extends JpaRepository<Contrat, Long> {
  List<Contrat> findByUserId(Long userId);
}

