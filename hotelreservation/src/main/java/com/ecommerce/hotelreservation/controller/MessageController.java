/**
 * 
 */
package com.ecommerce.hotelreservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 */
@Controller
@RequestMapping("/api")
public class MessageController {

	
	@ResponseBody
    @GetMapping("/message")
    public String hello(){
        return "message world";
    }

}
