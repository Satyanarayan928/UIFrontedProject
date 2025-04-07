package com.ecommerce.hotelreservation.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.ecommerce.hotelreservation.dto.ProductDto;
import com.ecommerce.hotelreservation.model.Product;
import com.ecommerce.hotelreservation.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    MongoTemplate mongoTemplate; 
    

    public String createProduct(ProductDto productDto) {
        try{
        	Product product = new Product();
        	Random rand = new Random();
        	int id=rand.nextInt(20);
        	product.setId(String.valueOf(id)); 
        	product.setName(productDto.getName());
        	product.setCategory(productDto.getCategory()); 
        	product.setPrice(productDto.getPrice());
        	product.setDescription(productDto.getDescription()); 
        	product.setManufacturer(productDto.getManufacturer()); 
        	product.setAvailableItems(productDto.getAvailableItems()); 
			 
            productRepository.save(product);

        }catch(Exception e){
            e.toString();
        }
        return "Product Created Successfully";
    }

    public Product getProduct(String id) {

         Optional<Product> product=null;
         Product prod=null;

        try{
             product = productRepository.findById(id);
        }catch(Exception e){e.toString();}

        if(product.isPresent()){
            return product.get();
        }else{
            return prod;
        }

    }

    public String deleteProduct(String id) {
        try{
              productRepository.deleteById(id);
        }catch(Exception e){e.toString();}
      return "Product Deleted Successfully";
    }


    public String updateProduct(String id, ProductDto productDto) {
    	String idCheck=id.trim();
    	System.out.println("Id:"+idCheck);
    	List<Product> products=productRepository.findAll();
    	System.out.println("products:"+products);
    	System.out.println("productsize:"+products.size());
    	for(Product prod:products) {
    		System.out.println("FoundProdID:"+prod.getId());
    		String prodIdCheck=prod.getId().trim();
    		if(Integer.parseInt(prodIdCheck) == Integer.parseInt(idCheck)) {
    			System.out.println("loopId:"+prod.getId()); 
    			
    			System.out.println("FoundProd:"+prod.getId()+prod.getName()+prod.getCategory());
    			productRepository.delete(prod); 
    			prod.setName(productDto.getName());
       		 	prod.setCategory(productDto.getCategory());
       		 	prod.setPrice(productDto.getPrice());
       		 	prod.setDescription(productDto.getDescription());
       		 	prod.setManufacturer(productDto.getManufacturer());
       		 	prod.setAvailableItems(productDto.getAvailableItems());
       		 	productRepository.save(prod);
    		}
    	}
		return "Product Updated Successfully";   
    }
    
    
    public List<Product> getProductByCategory(String category) {
    	
		 
    	System.out.println("category:"+category);
    	List<Product> products=productRepository.findByCategory(category);
    	return products;
    }
    
    public List<Product> getProducts(){
    	
    	List<Product> products=productRepository.findAll();
    	return products;
    
    }
    
    public List<Product> getAscendingOrderProducts(){
    	List<Product> products = productRepository.findAll(Sort.by(Sort.Direction.ASC, "price"));
    	return products;
    }
    
    public List<Product> getDescendingOrderProducts(){
    	List<Product> products = productRepository.findAll(Sort.by(Sort.Direction.DESC, "price"));
    	return products;
    }
    
    public List<Product> getRecentOrderProducts(){
    	 
    	List<Product> products = productRepository.findRecentOrderProducts();
    	return products;
    }
    
    
}
