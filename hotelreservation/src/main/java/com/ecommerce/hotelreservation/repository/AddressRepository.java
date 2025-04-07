package com.ecommerce.hotelreservation.repository;

import com.ecommerce.hotelreservation.model.Address;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends MongoRepository<Address, String> {
}
