package com.backend.mae_backend.repository;

import com.backend.mae_backend.entity.Devis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Repository
public interface DevisRepository extends JpaRepository<Devis, Long> {



}
