package com.ecommerce.hotelreservation.repository;


import com.ecommerce.hotelreservation.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
   Optional<Role> findByRole(String role);
}
