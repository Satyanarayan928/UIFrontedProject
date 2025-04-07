import React from "react";
import { TextField, Container, Grid,  Box, GridList } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
 


import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import { AppBar, Button, Toolbar, Search, SearchIconWrapper, SearchIcon, StyleInputBase, Typography, Link, IconButton} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from "react";

import iphone from './mobile.jpg';
import edit from './edit.jpg';
import dit from './delete.jpg';
import shoewhite from './shoe.jpg';
import bag_1 from './bag.jpg';
import airpod_1 from './earbud.jpg';

function BagData() {
    const categories = [{ id: 1, category: 'EarBud' }, { id: 2, category: 'Luxury Bag' }, { id: 3, category: 'Phone' }, { id: 4, category: 'shoe' }];

    const [shoeData, setShoeData] = useState([]);
    const [bagData, setBagData] = useState([]);
    const [earBud, setEarBud] = useState([]);
    const [phone, setPhone] = useState([]);
    const [data, setData] = useState(null);
    const [category, setCategory] = useState(null);
    const [values, setValues] = useState("select");
    const [currentValue, setCurrentValue] = useState("");

     



  
    const shoeCategory="shoe";
    const bagCategory="Luxury Bag";
    const phoneCategory="Phone";
    const earBudCategory="EarBud";
  
    const [currentTab, setCurrentTab] = React.useState(0);
    const [value, setValue] = React.useState("1"); 
    const [activeTab, setActiveTab] = useState(0);
  
    const handleChange = (event, newTab) => {
      setCurrentTab(newTab);
    };
  
  
    const TabPanel = (props)=>{
        const {children, value, index}=props
        return (<div hidden={value !== index}>
            {value===index && <Box mt={2} mx={2}>{children}</Box>}
        </div>)
    }
     
     
    const handleMenuChange = (event) => {
        console.log("Current Value Action:"+currentValue);
         
        if(currentValue === "1"){
          shoeData.sort((a, b) => {
            return currentValue === "1" ? a.price - b.price : "";
          });
          console.log("HightoLowShoe1:"+shoeData);
          setShoeData(shoeData);

          bagData.sort((a,b) => {
            return currentValue == "1" ? a.price - b.price : "";
          });
          console.log("HightoLowBag1:"+bagData);
          setBagData(bagData);

          earBud.sort((a,b) => {
            return currentValue === "1" ? a.price - b.price : "";
          });

          console.log("HightoLowEarBud1:"+earBud);
          setEarBud(bagData);

          phone.sort((a,b) => {
            return currentValue === "1" ? a.price - b.price : "";
          });
          console.log("HightoLowPhone1:"+phone);
          setPhone(phone);
         }  

         if(currentValue === "2"){
          shoeData.sort((a, b) => {
            return currentValue === "2" ? b.price - a.price : "";
          });
          console.log("HightoLowShoe2:"+shoeData);
          setShoeData(shoeData);

          bagData.sort((a,b) => {
            return currentValue == "2" ? b.price - a.price : "";
          });
          console.log("HightoLowBag2:"+bagData);
          setBagData(bagData);

          earBud.sort((a,b) => {
            return currentValue === "2" ? b.price - a.price : "";
          });

          console.log("HightoLowEarBud2:"+earBud);
          setEarBud(bagData);

          phone.sort((a,b) => {
            return currentValue === "2" ? b.price - a.price : "";
          });
          console.log("HightoLowPhone2:"+phone);
          setPhone(phone);
         }

         if(currentValue === "3"){
          shoeData.sort((a, b) => {
            return currentValue === "3" ? b.price - a.price : "";
          });
           
          console.log("RecentShoe3:"+shoeData[0]);
          setShoeData((shoeData) => [shoeData[0], ...shoeData]);

          bagData.sort((a,b) => {
            return currentValue == "3" ? b.price - a.price : "";
          });
          var newestBagValue = bagData[0]
          console.log("RecentBag3:"+bagData[0]);
          setBagData((bagData) => [bagData[0], ...bagData]);
 
          earBud.sort((a,b) => {
            return currentValue === "3" ? b.price - a.price : "";
          });
           
          console.log("RecentEarBud3:"+earBud[0]);
          setEarBud((earBud) => [earBud[0], ...earBud]);

          phone.sort((a,b) => {
            return currentValue === "3" ? b.price - a.price : "";
          });
           

          console.log("HightoLowRecentPhone3:"+phone[0]);
          setPhone((phone) => [phone[0], ...phone]);
         }



        
    };
  
    
    let categoryAllList = [];
    const fetchedAllCategories = () =>
      {
        shoeData.forEach((shoe, index) => {
          categoryAllList.push(<li key={index}>{shoe}</li>);
        })
  
        bagData.forEach((bag, index) => {
          categoryAllList.push(<li key={index}>{bag}</li>);
        })
  
        earBud.forEach((ed, index) => {
          categoryAllList.push(<li key={index}>{ed}</li>);
        })
  
        phone.forEach((ph, index) => {
          categoryAllList.push(<li key={index}>{ph}</li>);
        })
      }
   
    const loadDataOnlyOnce = () => {
  
      categories.forEach((category, index) => {
        console.log(category);
        let productCategory=category.category;
        console.log(productCategory);
        const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
        const apiUrl = `http://localhost:8080/api/products/categories?category=${productCategory}`;
        console.log(apiUrl);
        const response = axios.get(apiUrl ,headers);
         
        axios.get(apiUrl ,headers).then(res => {
          console.log(res);
          let {config, data, headers, request, status, statusText}=res;
          console.log(data);
          data.forEach((prod, index) => {
              console.log(prod);
              console.log(prod.category);
              console.log(prod.name);
              console.log(prod.description);
              console.log(prod.manufacturer);
              console.log(prod.price);
              console.log(prod.availableItems);
  
               if(prod.category === shoeCategory){
                  setShoeData((shoeData) => [...shoeData, prod]);
  
               }
  
               if(prod.category === bagCategory){
                  setBagData((bagData) => [...bagData, prod]);
  
               }
  
               if(prod.category === phoneCategory){
                  setPhone((phone) => [...phone, prod]);
  
               }
  
               if(prod.category === earBudCategory){
                  setEarBud((earBud) => [...earBud, prod]);
  
               }
  
                
              
          })
           
        }).catch(err => {
              console.log(err);
        })
              
            
              
              
          
        
    });
      
  }
  
  
    useEffect(() => {
      loadDataOnlyOnce();
  }, [])

    return (
      
        <div>
    
    <Grid container rowSpacing={1}>
      <Grid sx={{width: '400px'}}>
      <form  autoComplete="off">
        <FormControl sx={{ width: "80%" }}>
        <InputLabel></InputLabel>
        <InputLabel>Sorted By</InputLabel>
        <InputLabel></InputLabel>
        <InputLabel></InputLabel>
          <Select  name="name" value={values}    onChange={(e) => {
                        console.log("Current Value", e.target.value)
                        setCurrentValue(e.target.value)
                    }}  onClick={handleMenuChange}
                   defaultValue="Select">
            <MenuItem value="0">Default</MenuItem>
            <MenuItem value="1">Price: High to Low</MenuItem>
            <MenuItem value="2">Price: Low to High</MenuItem>
            <MenuItem value="3">Newest</MenuItem>
         </Select>
           
           
        </FormControl>
         
      </form>

      </Grid>
       
    <Grid size={30}>
    <div>
      {bagData.map((data, index) => (
        <Card key={index} style={{ marginBottom: '16px' }}>
          <CardContent>
            <img src={bag_1}  width={100} height={100}/>
            <Typography variant="h6" align="right">{data.price}</Typography>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {data.description}
            </Typography>
           
            <tr>
            <td>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Buy
          </Button>
          </td>
           
          </tr>
          </CardContent>
        </Card>
      ))}
    </div>
    </Grid>
     
    </Grid>
       
      
    </div>

        
    );
}

export default BagData;
