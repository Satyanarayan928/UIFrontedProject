
 package com.ecommerce.hotelreservation.service;
  
 import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.hotelreservation.dto.OrderDto;
import com.ecommerce.hotelreservation.model.Order;
import com.ecommerce.hotelreservation.repository.OrderRepository;
 
 @Service 
 public class OrderService {
 
 @Autowired 
 private OrderRepository orderRepository;
 
  
 
 public String createOrder(OrderDto orderDto){ 
	 try{ 	 
		 Order order=new Order();
		 Random rand = new Random();
     	 int id=rand.nextInt(20);
		 order.setOrderId(String.valueOf(id)); 
		 order.setAddress(orderDto.getAddress());
		 order.setProduct(orderDto.getProduct());
		 order.setQuantity(orderDto.getQuantity());
 
		 orderRepository.save(order);
 
 }catch(Exception e){ 
	 e.toString(); 
	 }
 
 return "Order Created Successfully"; 
 }
  
 public List<Order> getAllOrders() {
 
 List<Order> orders = new ArrayList<>(); 
 try{
	 	orders=orderRepository.findAll(); 
 }catch (Exception e)
 {
	 e.toString();
	 }
 
 return orders; }
 
 public Order getOrder(String id) { 
	 Optional<Order> order=null; 
	 Order empty = new Order();
 
 
 try{ 
	 order=orderRepository.findById(id); 
	 }catch (Exception e){
		 e.toString();
		 }
 if(order.isPresent()){
	 return order.get(); 
	 }else{ 
		 return empty; 
		 } } }
 