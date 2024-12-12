package Inventory.backend.Item;


import Inventory.backend.Utils.GenericResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService service;

    @PostMapping("/save")
    public ResponseEntity<GenericResponse> saveItem(@RequestBody SaveItemRequest item){
        service.saveItem(item);
        return ResponseEntity.ok().build();
    }
}
