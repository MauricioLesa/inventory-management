package Inventory.backend.User;

import Inventory.backend.Auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest) {
        authService.authenticate(loginRequest.email(),loginRequest.password());
        return ResponseEntity.ok().build();
    }

    public record LoginRequest(String email, String password) {
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody RegisterRequest registerRequest) {
        authService.register(
                registerRequest.email(),registerRequest.password(), registerRequest.username(),
                registerRequest.name(), registerRequest.middleName(), registerRequest.lastName()
        );
        return ResponseEntity.ok().build();
    }

    public record RegisterRequest(String username,String email, String password, String name, String middleName, String lastName) {
    }


    
}
