import React, { Component } from 'react';  

import shoewhite from './shoe.jpg';
import bag_1 from './bag.jpg';
import airpod_1 from './earbud.jpg';
import iphone from './mobile.jpg';
import edit from './edit.jpg';
import dit from './delete.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import BagDetails from "./BagDetails";
import EarBudDetails from "./EarBudDetails";
import RefrigiratorDetails from "./RefrigiratorDetails";
import JeanDetails from "./JeanDetails";
import LuxuryBagDetails from "./LuxuryBagDetails";







import './App.css';
import { AppBar, Button, Toolbar,  StyleInputBase, Typography, Link, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TextField, Container, Grid,  Box, GridList } from '@mui/material';
import axios from 'axios'; 
import { useEffect, useState } from "react";
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardContent from '@mui/material/CardContent'; 
import { Tab, Tabs } from "@mui/material"; 
import TabContext from "@mui/lab/TabContext"; 
import TabList from "@mui/lab/TabList"; 
import AllProduct from "./AllProduct";
import Applience from "./Applience";
import Electronics from "./Electronics";
import FancyItems from "./FancyItems";
import Cosmatics from "./Cosmatics";
import BagData from "./BagData";
import Apparel from "./Apparel";
import ProductDetails from './ProductDetails';
import BagSearch from "./BagDetails";
import EmptyProduct from "./EmptyProduct";
import PhoneDetails from "./PhoneDetails";
import ShoeDetails from "./ShoeDetails";

import { useParams } from "react-router-dom";
import { CenterFocusStrong } from '@material-ui/icons';
 

function ModifyProductAdmin() {
   const { productId } = useParams();
   const categories = [{ id: 1, category: 'EarBud' }, { id: 2, category: 'Luxury Bag' }, { id: 3, category: 'Phone' }, { id: 4, category: 'shoe' }];

  const [shoeData, setShoeData] = useState([]);
  const [bagData, setBagData] = useState([]);
  const [earBud, setEarBud] = useState([]);
  const [phone, setPhone] = useState([]);
  
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
   




  const [searchBarInfo, setSearchBarInfo] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchActivated, setSearchActivated] = useState(false);
  const [prodData, setProdData] = useState(null);
  

   
  
   

  const shoeCategory="shoe";
  const bagCategory="Luxury Bag";
  const phoneCategory="Phone";
  const earBudCategory="EarBud";

  const navigate=useNavigate();
  const navigateToProduct = () =>{
   navigate("/addProduct");
};
const navigateToLogin = () =>{
navigate("/login");
};

const handleInput = (e) => {
   alert(e.target.value);

 };

 const handleSubmit = (e) => {
  alert(e.target.value);

  const values = {name: name, category: category, price: price, description: description, manufacturer: manufacturer, availabileItems: availableItems}
      console.log("values:"+values);
      const productId=id;
      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      axios.put('http://localhost:8080/api/products', productId, values, { headers })
      .then((response) => {
        console.log("RESPONSE RECEIVED:", response);
      });


};



  const loadDataOnlyOnce = () => {

      const storeData=JSON.stringify(localStorage.getItem('datas'));
      const parseData=JSON.parse(storeData);
       
      alert(JSON.parse(parseData));
      setId(JSON.parse(parseData).id);
      setName(JSON.parse(parseData).name);
      setCategory(JSON.parse(parseData).category);
      setPrice(JSON.parse(parseData).price);
      setDescription(JSON.parse(parseData).description);
      setManufacturer(JSON.parse(parseData).manufacturer);
      setAvailableItems(JSON.parse(parseData).availableItems);

      
}

  useEffect(() => {
   loadDataOnlyOnce();
}, [])

  

   return (
       <div>
            
            <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" color="info" mx={2} mt={2}>
        <Grid container spacing={0}>
        <Grid  item xs={4}>
      <IconButton size='large'>
        <ShoppingCartIcon />
      </IconButton>
      </Grid>
      <Grid item xs={4}>
      <Typography inline variant="body1" align="left">Upgrade E-Shop</Typography>
      </Grid>
      <Grid item xs={4}>
      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="search-bar"
          className="text"
          onInput={handleInput}
          label="Search title"
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            width: 350,
            margin: "10px auto"
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>

      </Grid>
      <Grid item xs={4}>
        <Button style={{backgroundColor: "#0000FF", fontSize: "10px"}} variant="contained" align="right">Home</Button>
      </Grid>
      <Grid item xs={4}>
      <Button style={{backgroundColor: "#0000FF", fontSize: "10px"}} variant='contained' align="right" onClick={navigateToProduct}>AddProduct</Button>
       </Grid>
       <Grid item xs={4}>
        <Button style={{backgroundColor: "#880808", fontSize: "10px"}} variant="contained" align="right" onClick={navigateToLogin}>Logout</Button>
        </Grid>
        </Grid>
      </AppBar>
      </Box>
      

           <p>Displaying profile for user ID: {productId}</p>
            <p>{prodData}</p>
             
             
            <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
            <Typography>Modify Product</Typography>
            <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            MODIFY PRODUCT
          </Button>
    </form>

            </Box>
            </Container>
            

            
           
            
           
       </div>
   );
}  
export default ModifyProductAdmin;
