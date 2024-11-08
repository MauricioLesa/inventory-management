package Inventory.backend.User;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
@Builder
public class User implements Serializable, UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 100)
    private UUID id;

    @Nonnull
    @Column(unique=true)
    private String username;

    @Nonnull
    @Column(unique=true)
    private String email;

    @Nonnull
    private String password;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }
}