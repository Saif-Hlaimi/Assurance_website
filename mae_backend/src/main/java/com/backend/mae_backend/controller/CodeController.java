package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Code;
import com.backend.mae_backend.exception.ResourceNotFoundException;
import com.backend.mae_backend.repository.CodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/codes")
@CrossOrigin(origins = "http://localhost:4200")
public class CodeController {

  @Autowired
  private CodeRepository codeRepository;

  @GetMapping
  public List<Code> getAllCodes() {
    return codeRepository.findAll();
  }

  @PostMapping
  public Code createCode(@RequestBody Code code) {
    return codeRepository.save(code);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Code> getCodeById(@PathVariable Long id) {
    Code code = codeRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Code not found with id " + id));
    return ResponseEntity.ok(code);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Code> updateCode(@PathVariable Long id, @RequestBody Code codeDetails) {
    Code code = codeRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Code not found with id " + id));

    code.setCodeAdherent(codeDetails.getCodeAdherent());

    Code updatedCode = codeRepository.save(code);
    return ResponseEntity.ok(updatedCode);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCode(@PathVariable Long id) {
    Code code = codeRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Code not found with id " + id));

    codeRepository.delete(code);
    return ResponseEntity.noContent().build();
  }
}
