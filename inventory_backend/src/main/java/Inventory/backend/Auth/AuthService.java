package Inventory.backend.Auth;

import Inventory.backend.User.User;
import Inventory.backend.User.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Service;

import javax.management.openmbean.KeyAlreadyExistsException;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityContextRepository securityContextRepository;

    public User authenticate( HttpServletRequest request, HttpServletResponse response, String username, String password){
        SecurityContext context = SecurityContextHolder.createEmptyContext();
        Authentication authenticationRequest = new UsernamePasswordAuthenticationToken(username,password);
        Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);
        context.setAuthentication(authenticationResponse);
        SecurityContextHolder.setContext(context);
        securityContextRepository.saveContext(context, request, response);
        return (User)  context.getAuthentication().getPrincipal();
    }

    public void register(String email, String password, String organizationName, String name, String middleName, String lastName){
        String cryptPassword = passwordEncoder.encode(password);
        if (repository.findByUsername(email).isPresent())
            throw new KeyAlreadyExistsException();
        repository.save(User.builder()
                .name(name)
                .middleName(middleName)
                .lastName(lastName)
                .organizationName(organizationName)
                .password(cryptPassword)
                .username(email)
                .build());
    }

    public User getLoggeduser(){
        if(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken) {
            return null;
        }
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }




}
