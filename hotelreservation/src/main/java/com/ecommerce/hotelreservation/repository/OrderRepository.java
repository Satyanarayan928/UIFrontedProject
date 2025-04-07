package com.ecommerce.hotelreservation.repository;

import com.ecommerce.hotelreservation.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
}
