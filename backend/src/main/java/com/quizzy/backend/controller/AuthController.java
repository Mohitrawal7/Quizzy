package com.quizzy.backend.controller;


import com.quizzy.backend.dto.LoginRequest;
import com.quizzy.backend.dto.LoginResponse;
import com.quizzy.backend.dto.RegisterRequest;
import com.quizzy.backend.model.User;
import com.quizzy.backend.repository.UserRepository;
import com.quizzy.backend.service.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        // Checking if user already exist here
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            // Return error or 404 if the username is taken
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Username is already taken!");
        }

        // Create new user here now
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword())); //protect password
        user.setRole("USER");

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent() &&
                passwordEncoder.matches(loginRequest.getPassword(), userOptional.get().getPassword())) {

            com.quizzy.backend.model.User user = userOptional.get();
            UserBuilder userBuilder = org.springframework.security.core.userdetails.User.withUsername(user.getUsername());
            userBuilder.password(user.getPassword());
            userBuilder.roles("USER");
            UserDetails userDetails = userBuilder.build();

            // Generate the token
            String token = jwtService.generateToken(userDetails);


            return ResponseEntity.ok(new LoginResponse("Login successful!", token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}