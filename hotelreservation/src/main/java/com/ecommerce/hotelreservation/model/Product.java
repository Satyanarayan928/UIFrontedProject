package com.ecommerce.hotelreservation.model;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.annotation.Id;

@Document(value = "product")
@Data
@Builder
public class Product {

    @Id
    private String id;
    @Field(name = "name")
    private String name;
    @Field(name = "category")
    private String category;
    @Field(name = "price")
    private double price;
    @Field(name = "description")
    private String description;
    @Field(name = "manufacturer")
    private String manufacturer;
    @Field(name = "availabileItems")
    private String availableItems;
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getAvailableItems() {
		return availableItems;
	}
	public void setAvailableItems(String availableItems) {
		this.availableItems = availableItems;
	}
	 
	


    

}
