package Inventory.backend.User;

import Inventory.backend.Auth.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final AuthService authService;

    public record LoginRequest(String email, String password) {
    }

    public record RegisterRequest(String organizationName,String email, String password, String name, String middleName, String lastName) {
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(HttpServletRequest request,
                                      HttpServletResponse response,
                                      @RequestBody LoginRequest loginRequest) {
        User user = authService.authenticate(request, response,loginRequest.email(),loginRequest.password());
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody RegisterRequest registerRequest) {
        authService.register(
                registerRequest.email(),registerRequest.password(), registerRequest.organizationName(),
                registerRequest.name(), registerRequest.middleName(), registerRequest.lastName()
        );
        return ResponseEntity.ok().build();
    }

    @GetMapping("/load-user")
    public ResponseEntity<User> loadUser() {
                return ResponseEntity.ok(authService.getLoggeduser());
    }



    
}
