import React from "react";
import { useParams } from "react-router-dom";


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

function PhoneDetailsPage() {
  const { id } = useParams(); // Retrieve the 'id' parameter

  const [phone, setPhone] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState(false);
  const [formData, setFormData] = useState({
    quantity:''
  });

  const [catgry, setCatgry] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [manufacture, setManufacture] = useState([]);
  const [price, setPrice] = useState([]);

  const [currentTab, setCurrentTab] = React.useState(0);
  const [value, setValue] = React.useState("1"); 
  const [activeTab, setActiveTab] = useState(0);

  const navigate=useNavigate();
  const navigateToProduct = () =>{
       navigate("/addProduct");
  };
  const navigateToLogin = () =>{
    navigate("/login");
  };

  const handleButtonClick = (orderData) => {
    console.log("Order Data:", orderData); // Access the object here
    var qty=formData.quantity;
    console.log("Quantity:", qty);
    localStorage.setItem('order', JSON.stringify(orderData));
    localStorage.setItem('quantity', JSON.stringify(qty));

  };




  const handleQuantityChange = e => {
     const {name, value}=e.target;
     setFormData({[name]:value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    alert("submit");

    navigate('/phoneOrder');

  };

  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
  };


  const TabPanel = (props)=>{
      const {children, value, index}=props
      return (<div hidden={value !== index}>
          {value===index && <Box mt={2} mx={2}>{children}</Box>}
      </div>)
  }

  const loadDataOnlyOnce = () => {

      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      const apiUrl = `http://localhost:8080/api/products/676e1f453098e37a34cabc8d?id=${id}`;

      axios.get(apiUrl ,headers).then(res => {
        console.log(res);
        let {config, data, headers, request, status, statusText}=res;
        console.log(data);
        
            alert(data.category);
            alert(data.name);
            alert(data.description);
            alert(data.manufacture);
            alert(data.price);
             

            setCatgry(data.category);
            setName(data.name);
            setDescription(data.description);
            setManufacture(data.manufacture);
            setPrice(data.price);

             
            setPhone(data);    
            
            
            
        
         
      }).catch(err => {
            console.log(err);
      })


  }

  useEffect(() => {
    loadDataOnlyOnce();
}, [])



  return (
    <div>
       
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" color="info" mx={1} mt={1}>
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
        <Button style={{backgroundColor: "#0000FF", fontSize: "10px"}} variant="contained" align="right">Home</Button>
      </Grid>
       
       <Grid item xs={4}>
        <Button style={{backgroundColor: "#880808", fontSize: "10px"}} variant="contained" align="right" onClick={navigateToLogin}>Logout</Button>
        </Grid>
        </Grid>
      </AppBar>
      </Box>
  
      <AppBar position="static" color="primary" mx={2} mt={2} sx={{ borderRadius: 2}}>
        <Tabs value={activeTab} onChange={(event, newValue)=>setActiveTab(newValue)} centered>
          <Tab label="All Products"/>
          <Tab label="APPAREL"/>
          <Tab label="BAG"/>
          <Tab label="Electronics"/>
          <Tab label="Facy Items"/>
          <Tab label="PERSONAL CARE"/>
          <Tab label="Appeal"/>
          
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        
           
        <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{ marginBottom: '16px' }} sx={{maxWidth: 250}}>
          <CardContent>
            <form onSubmit={handleSubmit}>
            <img src={iphone}  width={100} height={100}/>
            
            
            
            <Typography variant="h6">{phone.manufacturer}</Typography>
            <Typography variant="h6">Category: <b>Electronics</b></Typography>
            <Typography variant="h6" >{phone.price}</Typography>
            <Typography variant="body2" color="textSecondary">
              {phone.description}
            </Typography>
             
            <TextField
        label="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleQuantityChange}
        fullWidth
        margin="normal" required
      />
            
          
          <tr>
            <td>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={() => handleButtonClick(phone)}>
            Place Order
          </Button>
          </td>
           
          </tr>
          </form>
          </CardContent>
        </Card>
        </Box>
        </Container>
        
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
         <Apparel/>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
         <BagData/>
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
         <Electronics/>
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        <FancyItems/>
      </TabPanel>
      <TabPanel value={activeTab} index={5}>
        <Cosmatics/>
      </TabPanel>
      <TabPanel value={activeTab} index={6}>
        <ProductDetails/>
      </TabPanel>

    </div>
  );
}

export default PhoneDetailsPage;
