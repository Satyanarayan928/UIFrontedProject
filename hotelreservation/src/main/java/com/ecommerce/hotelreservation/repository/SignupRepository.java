package com.ecommerce.hotelreservation.repository;

import com.ecommerce.hotelreservation.model.Signup;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SignupRepository extends MongoRepository<Signup, Integer> {

	Signup  findByEmail(String email);

}
