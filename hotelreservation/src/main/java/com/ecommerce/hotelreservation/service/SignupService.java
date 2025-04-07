package com.ecommerce.hotelreservation.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.hotelreservation.dto.SignupDto;
import com.ecommerce.hotelreservation.model.Role;
import com.ecommerce.hotelreservation.model.Signup;
import com.ecommerce.hotelreservation.repository.RoleRepository;
import com.ecommerce.hotelreservation.repository.SignupRepository;


@Service
public class SignupService {

    @Autowired
    SignupRepository signupRepository;

    @Autowired
    RoleRepository roleRepository;
    

   

    public String createSignup(SignupDto signupDto) {
        try{
        	Set<String> strRoles = signupDto.getRole();
            System.out.println("Roles"+strRoles);
            List<Role> roles = new ArrayList<>();

			if (strRoles != null) {
				 
				for(String role: strRoles) {
					System.out.println("roleloop:"+role); 
					if(role.equals("admin")) {  
					     System.out.println("elseadmin"); 
					     Role roleAdmin=new Role(); 
						 roleAdmin.setRole(role);
						 roles.add(roleAdmin);
				    }
					
					if(role.equals("user")) {
						System.out.println("userentered");
						Role roleUser=new Role(); 
						roleUser.setRole(role);
					    roles.add(roleUser); 
					  }
				}
			}

          try {
            	  
				   
					 
				  System.out.println("Role:"+roles); 
                  if(roles.size() > 0) {
                	    Random rand = new Random();
   				   		int id=rand.nextInt(10);
   				   		Signup signUp=new Signup();
   				   		signUp.setId(id);
   				   		signUp.setEmail(signupDto.getEmail());
   				   		signUp.setPassword(signupDto.getPassword());
   				   		signUp.setFirstName(signupDto.getFirstName());
   				   		signUp.setLastName(signupDto.getLastName()); 
   				   		signUp.setContactNumber(signupDto.getContactNumber());
   				   		signUp.setRoles(roles);
   				   		signupRepository.save(signUp);
   				   		System.out.println("Signup created");
                  }else {
                	    Random rand = new Random();
 				   		int id=rand.nextInt(10);
 				   		Role role=new Role();
 				   		role.setRole("user"); 
 				   	    roles.add(role);
 				   		Signup signUp=new Signup();
 				   		signUp.setId(id);
 				   		signUp.setEmail(signupDto.getEmail());
 				   		signUp.setPassword(signupDto.getPassword());
 				   		signUp.setFirstName(signupDto.getFirstName());
 				   		signUp.setLastName(signupDto.getLastName()); 
 				   		signUp.setContactNumber(signupDto.getContactNumber());
 				   		signUp.setRoles(roles);
 				   		signupRepository.save(signUp);
 				   		System.out.println("Signup created Successfully");
                  }
               } catch (Exception e) {
                   System.out.println(e.getMessage());
               }

        }catch(Exception e){
            e.toString();
        }

        return "Signup Created Successfully";

    }


}
