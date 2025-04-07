package com.ecommerce.hotelreservation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecommerce.hotelreservation.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

	@Query(value = "{category:'?0'}")
	List<Product> findByCategory(String category);

	
	@Query(value = "{id:'?0'}")
	Optional<Product> findByUpdateId(String id);
	
	@Query(value = "{}", sort = "{ '_id' : -1 }")
	List<Product> findRecentOrderProducts();
}
