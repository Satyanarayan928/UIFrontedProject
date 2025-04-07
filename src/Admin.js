import React from "react";
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
import AllProductAdmin from "./AllProductAdmin";


 


function Admin() {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
   
  const categories = [{ id: 1, category: 'EarBud' }, { id: 2, category: 'Luxury Bag' }, { id: 3, category: 'Phone' }, { id: 4, category: 'shoe' }];

  const [shoeData, setShoeData] = useState([]);
  const [bagData, setBagData] = useState([]);
  const [earBud, setEarBud] = useState([]);
  const [phone, setPhone] = useState([]);
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [searchBarInfo, setSearchBarInfo] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchActivated, setSearchActivated] = useState(false);
   
  
   

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

  
 
    
    console.log("ShoeData:"+shoeData);
    console.log("BagData:"+bagData);
    console.log("EarBud:"+earBud);
    console.log("Phone:"+phone);
    
     
     

  let searchProductList = [];
  let seasonsList = [];

  seasons.forEach((season, index) => {
    seasonsList.push(<li key={index}>{season}</li>);
  });

  const navigate=useNavigate();
  const navigateToProduct = () =>{
       navigate("/addProduct");
  };
  const navigateToLogin = () =>{
    navigate("/login");
  };
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const handleInput = (e) => {
    alert(e.target.value);
    setSearchActivated(true);
    setSearchBarInfo(e.target.value);
    alert(searchBarInfo === "bag");
     

    

  };

  const isEmpty = (obj) => { 
    return Object.keys(obj).length === 0; 
  }; 

  
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
        <Box>
           {
             searchActivated === true ? <Grid size={30}>
                 <div>
                 {searchBarInfo === "bag" ? <BagDetails/> : ""}

                  {searchBarInfo === "Phone" ? <PhoneDetails/> : ""}

                  {searchBarInfo === "shoe" ? <ShoeDetails/> : ""}

                  {searchBarInfo === "EarBud" ? <EarBudDetails/> : ""}

                  {searchBarInfo === "Luxury Bag" ? <LuxuryBagDetails/> : ""}

                  {searchBarInfo === "refrigirator" ? <RefrigiratorDetails/> : ""}

                  {searchBarInfo === "jean" ? <JeanDetails/> : ""}

                 </div>

             </Grid>: <AllProductAdmin/>
           }
        </Box>
        
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

export default Admin;
