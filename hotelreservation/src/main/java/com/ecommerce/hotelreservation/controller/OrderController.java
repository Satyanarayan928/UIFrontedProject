
 package com.ecommerce.hotelreservation.controller;
 
 import com.ecommerce.hotelreservation.dto.OrderDto; 
 import com.ecommerce.hotelreservation.model.Order; 
 import com.ecommerce.hotelreservation.service.AddressService;
import com.ecommerce.hotelreservation.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired; 
 import org.springframework.http.HttpStatus; 
 import org.springframework.web.bind.annotation.*;
 
 import java.util.List;
 
 @CrossOrigin(origins = "http://localhost:3000")
 @RestController
 @RequestMapping("/api") 
 public class OrderController {
 
 @Autowired 
 OrderService orderService;
 
 @PostMapping("/orders")
 
  @ResponseStatus(HttpStatus.CREATED) 
 public String createOrder(@RequestBody OrderDto orderDto) {
 
 return orderService.createOrder(orderDto); 
 }
 
 @GetMapping("/orders")
 @ResponseStatus(HttpStatus.OK) 
 public List<Order> getAllOrders() {
 
 return orderService.getAllOrders(); }
 
 @GetMapping("/orders/{id}")
 
 @ResponseStatus(HttpStatus.OK) 
 public Order getOrder(@RequestParam String id)
 {
  
 return orderService.getOrder(id); }
 
  }
 