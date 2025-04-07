package com.ecommerce.hotelreservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.hotelreservation.dto.SignupDto;
import com.ecommerce.hotelreservation.service.SignupService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class SignupController {

    @Autowired
    SignupService signupService;

    @PostMapping("/auth/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createSignup(@RequestBody SignupDto signupDto) {

    	String exception;
    	try {
    		String response=signupService.createSignup(signupDto);
    		return ResponseEntity.ok(response); 
    	}catch(Exception e) {
    		e.printStackTrace();
    		System.out.println(e.toString()); 
    		exception=e.toString();
    	}
		return ResponseEntity.ok(exception);  
        
    }

}
