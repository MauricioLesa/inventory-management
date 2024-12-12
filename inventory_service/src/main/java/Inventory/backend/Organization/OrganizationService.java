package Inventory.backend.Organization;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class OrganizationService {

    private OrganizationRepository repository;

    public boolean createOrganization(String organizationName){
        Organization newOrganization = Organization.builder().Name(organizationName).build();
        repository.save(newOrganization);
        return true;
    }
}
