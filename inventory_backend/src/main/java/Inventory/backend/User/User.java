package Inventory.backend.User;

import jakarta.persistence.*;
import java.io.Serializable;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "user")

public class User implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_sequence")
    @SequenceGenerator(name="user_sequence", sequenceName="user_sequence", allocationSize=100)
    private Long id;
    
}