package com.ecommerce.hotelreservation.dto;
import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
public class OrderDto {

    private String orderId;
    private int quantity;
    private String product;
    private String address;
    
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

    
}
