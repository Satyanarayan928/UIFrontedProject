/**
 * 
 */
package com.ecommerce.hotelreservation.dto;

import java.util.List;

/**
 * 
 */
public class LoginResponseDto {
	
	private String email;
	private String token;
    private List<String> roles;
    
	public LoginResponseDto(String email, String token, List<String> roles) {
		super();
		this.email = email;
		this.token = token;
		this.roles = roles;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	

}
