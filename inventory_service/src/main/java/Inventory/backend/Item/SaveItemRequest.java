package Inventory.backend.Item;

public record SaveItemRequest(String name, int quantity, byte[] image) {
}
