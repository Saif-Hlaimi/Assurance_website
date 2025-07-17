package com.backend.mae_backend.Services;

import com.backend.mae_backend.entity.Contrat;
import com.backend.mae_backend.entity.Devis;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.ContratRepository;
import com.backend.mae_backend.repository.DevisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;

@Service
public class ContratService {

  @Autowired
  private DevisRepository devisRepository;

  @Autowired
  private ContratRepository contratRepository;

  public Contrat createContrat(Long devisId) {
    Devis devis = devisRepository.findById(devisId)
      .orElseThrow(() -> new ResourceNotFoundException("Devis not found"));

    Contrat contrat = new Contrat();
    contrat.setUtilisateur(devis.getUtilisateur());
    contrat.setAssurance(devis.getAssurance());
    contrat.setDateDebut(new Date());
    contrat.setDateFin(calculateEndDate(new Date()));
    contrat.setMontantTotal(devis.getMontant());

    return contratRepository.save(contrat);
  }

  private Date calculateEndDate(Date startDate) {
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(startDate);
    calendar.add(Calendar.YEAR, 1); // Contrat d'un an
    return calendar.getTime();

  }
}
