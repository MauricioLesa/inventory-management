package Inventory.backend.Item;

import Inventory.backend.Utils.GenericResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository repository;

    public GenericResponse saveItem(SaveItemRequest itemRequest){
        Item item = Item.builder()
                .Name(itemRequest.name())
                .quantity(itemRequest.quantity())
                .ImagePath("")
                .build();
        repository.save(item);
        return GenericResponse.builder().message("success").build();
    }

}
