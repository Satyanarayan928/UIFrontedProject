package com.ecommerce.hotelreservation.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductDto {

    private String id;
    private String name;
    private String category;
    private double price;
    private String description;
    private String manufacturer;
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
