package com.ecommerce.hotelreservation.controller;


import com.ecommerce.hotelreservation.dto.ProductDto;
import com.ecommerce.hotelreservation.model.Product;
import com.ecommerce.hotelreservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public String createProduct(@RequestBody ProductDto productDto) {

        return productService.createProduct(productDto);
    }

    @GetMapping("/products/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product getProduct(@RequestParam String id) {

        return productService.getProduct(id);
    }

    @DeleteMapping("/products/")
    @ResponseStatus(HttpStatus.OK)
    public String deleteProduct(@RequestParam String id) {

        return productService.deleteProduct(id);
    }

    @PutMapping("/products/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public String updateProduct(@PathVariable("id") String id, @RequestBody ProductDto productDto) {

        return productService.updateProduct(id, productDto);
    }

    @GetMapping("/products/categories")
    public List<Product> getProductByCategory(String category) {
    	
		return productService.getProductByCategory(category); 
    }
    
    @GetMapping("/product/ascendingOrderProducts")
    public List<Product> getAscendingOrderProducts(){
    	
    	return productService.getAscendingOrderProducts();
    }
    
    @GetMapping("/product/descendingOrderProducts")
    public List<Product> getDescendingOrderProducts(){
    	
    	return productService.getDescendingOrderProducts();
    }
    
    @GetMapping("/product/recentOrderProducts")
    public List<Product> getRecentOrderProducts(){
    	
    	return productService.getRecentOrderProducts();
    }
    
    
    
    
}
