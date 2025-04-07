package com.ecommerce.hotelreservation.service;

import com.ecommerce.hotelreservation.model.Signup;
import com.ecommerce.hotelreservation.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserDetail implements UserDetailsService {

    @Autowired
    SignupRepository signupRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    	System.out.println("username:"+username); 
        Signup signup = signupRepository.findByEmail(username);
        System.out.println("signup:"+signup);
        if (signup == null) {
            throw new UsernameNotFoundException("User not found");
        }
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        Set<GrantedAuthority> authorities = signup.getRoles().stream()
                .map((role) -> new SimpleGrantedAuthority(role.getRole()))
                .collect(Collectors.toSet());
        
        System.out.println("authorities:"+authorities);

        return new org.springframework.security.core.userdetails.User(username,signup.getPassword(),authorities);


    }
}
