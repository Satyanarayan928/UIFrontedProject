package com.ecommerce.hotelreservation.controller;


import com.ecommerce.hotelreservation.dto.AddressDto;
import com.ecommerce.hotelreservation.model.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.hotelreservation.service.AddressService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping("/addresses")
    @ResponseStatus(HttpStatus.CREATED)
    public String createAddress(@RequestBody AddressDto addressDto) {

        return addressService.createAddress(addressDto);
    }

    @GetMapping("/addresses")
    @ResponseStatus(HttpStatus.OK)
    public List<Address> getAllAddresses() {
        System.out.println("getAllAddressescontroller");
        return addressService.getAllAddresses();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteAddresses(@RequestParam String id) {

        return addressService.deleteAddresses(id);
    }

    @PutMapping("/addresses/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public String updateAddress(@PathVariable("id") String id, @RequestBody AddressDto addressDto) {
        System.out.println("updateAddresscontroller");
        return addressService.updateAddress(id, addressDto);
    }
    
    @GetMapping("/addresses/{id}")
    public Address getAddress(@PathVariable("id") String id) {
    	
    	return addressService.getAddress(id); 
    }
    
}
