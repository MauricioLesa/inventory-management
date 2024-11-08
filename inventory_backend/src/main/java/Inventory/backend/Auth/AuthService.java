package Inventory.backend.Auth;

import Inventory.backend.User.User;
import Inventory.backend.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.openmbean.KeyAlreadyExistsException;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public void authenticate(String username, String password){
        SecurityContext context = SecurityContextHolder.createEmptyContext();
        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(username,password);
        Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);
        context.setAuthentication(authenticationResponse);
        SecurityContextHolder.setContext(context);
    }

    public void register(String email, String password, String username){
        String cryptPassword = passwordEncoder.encode(password);
        if (repository.findByEmail(email).isPresent() || repository.findByUsername(username).isPresent())
            throw new KeyAlreadyExistsException();
        repository.save(User.builder()
                .email(email)
                .password(cryptPassword)
                .username(username)
                .build());
    }




}
