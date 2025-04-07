package com.ecommerce.hotelreservation.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.hotelreservation.dto.AddressDto;
import com.ecommerce.hotelreservation.model.Address;
import com.ecommerce.hotelreservation.repository.AddressRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    

    public String createAddress(AddressDto addressDto){
        try{
            System.out.println("DTO:"+addressDto); 
            Address address=new Address();
            Random rand = new Random();
        	int id=rand.nextInt(20);
            address.setId(String.valueOf(id)); 
            address.setName(addressDto.getName()); 
            address.setContactNumber(addressDto.getContactNumber());
            address.setCity(addressDto.getCity()); 
            address.setLandmark(addressDto.getLandmark()); 
            address.setStreet(addressDto.getStreet());
            address.setLandmark(addressDto.getLandmark());
            address.setStreet(addressDto.getStreet());
            address.setState(addressDto.getState());
            address.setZipcode(addressDto.getZipcode()); 
            System.out.println("address:"+address); 
			 
            addressRepository.save(address);

        }catch(Exception e){
            e.toString();
        }

        return "Address Created Successfully";
    }

    public List<Address> getAllAddresses() {
        System.out.println("getAllAddressesservice");

        return addressRepository.findAll();

    }

    public String deleteAddresses(String id) {

        try{
             addressRepository.deleteById(id);
        }catch(Exception e){e.toString();}
        return "Deleted Successfully";
    }

    public String updateAddress(String id, AddressDto addressDto) {
            System.out.println("updateAddressService");
        try{

                Optional<Address> address=addressRepository.findById(id);
            System.out.println("updateAddressServiceDB"+address);
                 if(address.isPresent()){
                     address.get().setName(addressDto.getName());
                     address.get().setContactNumber(addressDto.getContactNumber());
                     address.get().setCity(addressDto.getCity());
                     address.get().setLandmark(addressDto.getLandmark());
                     address.get().setStreet(addressDto.getStreet());
                     address.get().setState(addressDto.getState());
                     address.get().setZipcode(addressDto.getZipcode());
                     addressRepository.save(address.get());
                 }

        }catch(Exception e){e.toString();}

        return "Address Updated Successfully";
    }
    
    
    public Address getAddress(String id) {

        Optional<Address> addressOpt=null;
        Address address=new Address();

       try{
    	   addressOpt = addressRepository.findById(id);
       }catch(Exception e){e.toString();}

       if(addressOpt.isPresent()){
           return addressOpt.get();
       }
	    return address; 

   }

    
}
