package com.backend.mae_backend.controller;

import com.backend.mae_backend.entity.Utilisateur;
import com.backend.mae_backend.repository.UtilisateurRepository;
import com.backend.mae_backend.controller.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtTokenProvider tokenProvider;

  @Autowired
  private UtilisateurRepository utilisateurRepository;

  @PostMapping("/login")
  public Map<String, Object> login(@RequestBody LoginRequest loginRequest) {
    try {
      Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
          loginRequest.getCode().getCodeAdherent(),
          loginRequest.getMotDePasse()
        )
      );

      SecurityContextHolder.getContext().setAuthentication(authentication);
      String jwt = tokenProvider.generateToken(authentication);

      // Log for debugging
      System.out.println("Generated JWT Token: " + jwt);

      UserDetails userDetails = (UserDetails) authentication.getPrincipal();
      Utilisateur utilisateur = utilisateurRepository.findByEmail(userDetails.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));

      Map<String, Object> response = new HashMap<>();
      response.put("token", jwt);
      response.put("user", utilisateur);

      return response;
    } catch (Exception e) {
      e.printStackTrace();  // Log the error for further investigation
      throw new RuntimeException("Login failed");
    }
  }



  @GetMapping("/current-user")
  public Utilisateur getCurrentUser() {
    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    String username;
    if (principal instanceof UserDetails) {
      username = ((UserDetails) principal).getUsername();
    } else {
      username = principal.toString();
    }

    return utilisateurRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not found"));
  }
}
