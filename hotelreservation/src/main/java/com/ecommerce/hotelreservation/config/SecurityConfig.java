package com.ecommerce.hotelreservation.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.ecommerce.hotelreservation.service.UserDetail;


@Configuration
public class SecurityConfig{

    @Autowired
    private UserDetail userDetailService;
    

    public SecurityConfig(UserDetail userDetailService) {
		super();
		this.userDetailService = userDetailService;
	}

	@Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

	/*
	 * @Bean public AuthenticationManager
	 * authenticationManager(AuthenticationConfiguration configuration) throws
	 * Exception { return configuration.getAuthenticationManager(); }
	 */

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {


        http.csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(
                authorize -> authorize.requestMatchers("/api/**").permitAll()
                        .anyRequest().authenticated());


        return http.build();



    }

    
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/api/auth/signin", "/api/auth/signup");
    }
    
    
    
    
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailService);
        provider.setPasswordEncoder(passwordEncoder()); 
        return provider;

    }
    
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
      AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
      authenticationManagerBuilder.userDetailsService(userDetailService).passwordEncoder(passwordEncoder());
      return authenticationManagerBuilder.build();
    }

}
