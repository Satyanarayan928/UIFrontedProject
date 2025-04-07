package com.ecommerce.hotelreservation.controller;

import com.ecommerce.hotelreservation.dto.LoginRequestDto;
import com.ecommerce.hotelreservation.dto.LoginResponseDto;
import com.ecommerce.hotelreservation.model.Signup;
import com.ecommerce.hotelreservation.repository.SignupRepository;
import com.ecommerce.hotelreservation.service.UserDetail;
import com.ecommerce.hotelreservation.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

     

    @Autowired
    private UserDetail userDetail;


    @Autowired
    private JwtUtil jwtUtil;




    @PostMapping("auth/signin")
    public ResponseEntity<LoginResponseDto> authenticateUser(@RequestBody LoginRequestDto loginDto){
    	System.out.println("EMail:"+loginDto.getUsername()+"Password:"+loginDto.getPassword());
    	System.out.println("auth:"+new UsernamePasswordAuthenticationToken( loginDto.getUsername(), loginDto.getPassword())); 
		try {
		  Authentication authentication = authenticationManager.authenticate(new
		 UsernamePasswordAuthenticationToken( loginDto.getUsername(),
		 loginDto.getPassword()));
		  SecurityContextHolder.getContext().setAuthentication(authentication);
		}catch(Exception e) {
			e.printStackTrace();
			e.getCause();
		}
		/*
		 * Authentication authentication = authenticationManager.authenticate(new
		 * UsernamePasswordAuthenticationToken(loginDto.getEmail(),
		 * loginDto.getPassword()));
		 */
    	  
    	 

        


        //String accessToken=tokenService.generateToken(loginDto.getUsername());
        UserDetails user=userDetail.loadUserByUsername(loginDto.getUsername());
        Signup signup=new Signup();
        signup.setEmail(user.getUsername());
        signup.setFirstName(" ");
        signup.setLastName(" ");
        String accessToken = jwtUtil.createToken(signup);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer "+accessToken);

        //UserDetails user=userDetail.loadUserByUsername(loginDto.getEmail());

       if(user != null) {
           String responseBody = user.getUsername() + ":" + user.getPassword() + ":" + user.getAuthorities() + ":" + accessToken;
           List<GrantedAuthority> listAuthorities = new ArrayList<GrantedAuthority>();
           List<String> roles = new ArrayList<String>();
           listAuthorities.addAll(user.getAuthorities());
           for(GrantedAuthority authority: user.getAuthorities()) {
        	   roles.add(authority.getAuthority()); 
           }
           LoginResponseDto loginResponseDto=new LoginResponseDto(
                   user.getUsername() ,accessToken, roles
           );
           return new ResponseEntity<>(loginResponseDto, headers, HttpStatus.OK);
       }else{
           List<String> listAuthorities = new ArrayList<String>();
           LoginResponseDto loginResponseDto=new LoginResponseDto(
                   " " ," ", listAuthorities
           );
           return new ResponseEntity<>(loginResponseDto, headers, HttpStatus.UNAUTHORIZED);
       }


    }





}
