import React, { useState } from "react";
import { TextField, Button, Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { AppBar,  Toolbar,  Grid, StyleInputBase, Link, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneDetails from "./PhoneDetails";
import PhoneDetailsPage from "./PhoneDetailsPage";
import PhoneDetailsPageSteps from "./PhoneDetailsPageSteps";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import iphone from './mobile.jpg';
import axios from 'axios';
import {Input,  FormControl,  InputLabel,  FormHelperText,  Checkbox,  Switch,  FormControlLabel,    Stack, Select, MenuItem } from "@mui/material";
import { Container } from '@mui/material';



const PhoneOrder = () => {
  const [activeStep, setActiveStep] = useState(0);
   
  const [phoneData, setPhoneData] = useState([]);
  const [quantityData, setQuantityData] = useState([]);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [index, setIndex] = useState('');
  const [confirmAddress, setConfirmAddress] = useState([]);

  const [addressId, setAddressId] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderContactNumber, setOrderContactNumber] = useState('');
  const [orderCity, setOrderCity] = useState('');
  const [orderLandmark, setOrderLandmark] = useState('');
  const [orderStreet, setOrderStreet] = useState('');
  const [orderState, setOrderState] = useState('');
  const [orderZipcode, setOrderZipcode] = useState('');

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

   
  const [formData, setFormData] = useState({
    address: '',
     
  })

  const [errors, setErrors] = useState({
    address: '',
     
  });

  const validate = () => {
    const newErrors = { address: ''};
    let isValid = true;

    
    alert("valid1");
    if (activeStep === 1) {
      alert("valid2");
      alert("Dropdownvalue:"+selectedValue);
      if (selectedValue === "") {
        alert("valid3");
        newErrors.address = 'Address is required';
        alert(newErrors.address);
        isValid = false;
      }
    }

    if(selectedValue !== ""){
      alert("Not Null:"+selectedValue);
      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      const apiUrl = `http://localhost:8080/api/addresses`;

       axios.get(apiUrl ,headers).then(res => {
        console.log("response:"+res);
        let {config, data, headers, request, status, statusText}=res;
        console.log("Address Specific Response:"+data);

        data.forEach((addrr, index) => {
          console.log("Address1111:"+addrr);
          if(addrr.id === selectedValue){
            alert(addrr.landmark);
            
            console.log("Address specific Data:"+addrr);

            console.log("id:"+addrr.id);
            console.log("name:"+addrr.name);
            console.log("contactNumber:"+addrr.contactNumber);
            console.log("city:"+addrr.city);
            console.log("landmark:"+addrr.landmark);
            console.log("street:"+addrr.street);
            console.log("state:"+addrr.state);
            console.log("zipcode:"+addrr.zipcode);

            setAddressId(addrr.id);
            setOrderName(addrr.name);
            setOrderContactNumber(addrr.contactNumber);
            setOrderCity(addrr.city);
            setOrderLandmark(addrr.landmark);
            setOrderStreet(addrr.street);
            setOrderState(addrr.state);
            setOrderZipcode(addrr.zipcode);
          }
        })

          
         
      }).catch(err => {
        console.log(err);
  })


      
    }
    alert("valid4");
    setErrors(newErrors);
    return isValid;
  };





  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);


  // Steps of the form
  const steps = ["Items", "Select Address", "Confirm Order"];

   

  // Handle next step
  const handleNext = () => {
    alert("Next");
    if(validate()){
         setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Handle previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle form submission
  const handleSubmit = () => {
    
    alert("Quantity:"+quantityData);
    alert("ProductId:"+phoneData.id);
    alert("AddressId:"+addressId);
    var productId=phoneData.id;

      const values = {quantity: quantityData, product: productId, address: addressId } 
      alert(values);
      console.log("values:"+values);
      
      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      axios.post('http://localhost:8080/api/orders', values, { headers })
      .then((response) => {
        console.log("ORDER RESPONSE RECEIVED:", response);
      });

    alert("Order Placed Successfully");
  };

  const handleChanges = (event) => {
    alert(event.target.value)
    setSelectedValue(event.target.value);
};


  const navigate=useNavigate();
   
  const navigateToLogin = () =>{
    navigate("/login");
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    
      console.log("validated");
      const values = {name: name, contactNumber: contactNumber, city: city, landmark: landmark, street: street, state: state, zipcode: zipcode}
      console.log("values:"+values);
      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      axios.post('http://localhost:8080/api/addresses', values, { headers })
      .then((response) => {
        console.log("RESPONSE RECEIVED:", response);
      });

    
  }


  const loadDataOnlyOnce = () => {
       const phoneData = JSON.parse(localStorage.getItem('order'));
       const quantityData = JSON.parse(localStorage.getItem('quantity'));

       setPhoneData(phoneData);
       setQuantityData(quantityData);

       console.log("Order1:"+phoneData);
       console.log("quantity1:"+quantityData);

       const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
       const apiUrl = `http://localhost:8080/api/addresses`;

       axios.get(apiUrl ,headers).then(res => {
        console.log("response:"+res);
        let {config, data, headers, request, status, statusText}=res;
        console.log("Address Response:"+data);
        setOptions(data);
         
      }).catch(err => {
        console.log(err);
  })
        
  }

  useEffect(() => {
    loadDataOnlyOnce();
}, [])





  return (

    

    
    <Box sx={{ width: "100%" }}>
    <Box>
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
        <Button style={{backgroundColor: "#0000FF", fontSize: "10px"}} variant="contained" align="right">Home</Button>
      </Grid>
       
       <Grid item xs={4}>
        <Button style={{backgroundColor: "#880808", fontSize: "10px"}} variant="contained" align="right" onClick={navigateToLogin}>Logout</Button>
        </Grid>
        </Grid>
      </AppBar>

    </Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      
      <Box sx={{ padding: "20px" }}>
        {activeStep === 0 && (
             
            <div>
              <Container component="main" maxWidth="xs">
              <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Card style={{ marginBottom: '16px' }}>
                <CardContent>
                  <img src={iphone}  width={100} height={100}/>
                  
                  <Typography variant="h6">{phoneData.name}</Typography>
                  <Typography variant="h6">Category:<b>ELECTRONICS</b></Typography>
                  <Typography variant="body2" color="textSecondary">
                    {phoneData.description}
                  </Typography>
                  <Typography variant="h6">{phoneData.price}</Typography>
                  <Typography variant="h6">{quantityData}</Typography>
                </CardContent>
              </Card>
              </Box>
              </Container>
           </div>
         
        )}
        {activeStep === 1 && (
          
          <Container component="main" maxWidth="xs">
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               
             <FormControl>
              <Typography>Select Address:</Typography>
   
  <Select  
    labelId="demo-simple-select-address" sx={{width:400, height:50}} 
    id="demo-simple-select"
    value={selectedValue}
    label="Address"
    onChange={handleChanges}
  >
    {options.map((number) => (
         <MenuItem value={number.id}>{number.name}{number.city}{number.landmark}{number.street}{number.state}{number.zipcode}</MenuItem>
         
      ))}
    
    
  </Select>
  <div style={{ color: 'red' }}>{errors.name}</div>

   

</FormControl>
        
         
          </Box>
          <Box component="form" onSubmit={handleAddressSubmit} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="contactNumber"
            type="contactNumber"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <TextField
            label="city"
            type="city"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="landmark"
            type="landmark"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
          <TextField
            label="street"
            type="street"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

<TextField
            label="state"
            type="state"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

<TextField
            label="zipcode"
            type="zipcode"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Save Address
          </Button>

          </Box>
          </Container>


          
          
        )}
        {activeStep === 2 && (
          <Container component="main" maxWidth="xs">
          <Grid alignItems={"flex-start"} container spacing={13} fullWidth>
          <Grid container direction="column" item xs={6} spacing={1} fullWidth> 
            <Box>
              <Typography><b>Phone:</b></Typography>
              <Card>
                <CardContent>
                  <img src={iphone}  width={100} height={100}/>
                  
                  <Typography variant="h6">{quantityData}</Typography>
                  <Typography variant="h6">Category:<b>ELECTRONICS</b></Typography>
                  <Typography variant="body2" color="textSecondary">
                    {phoneData.description}
                  </Typography>
                  <Typography>Price:</Typography>
                  <Typography variant="h6">{phoneData.price*quantityData}</Typography>
                  
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid container direction="column" item xs={6} spacing={1} fullWidth> 
            <Box>
                <Typography><b>Address Details:</b></Typography>
                 
        <Card key={index} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h6">{orderName}</Typography>
            <Typography variant="h6">Contact Number:{orderContactNumber}</Typography>
            <Typography variant="h6">{orderStreet}{orderCity}</Typography>
            <Typography variant="h6">{orderState}</Typography>
            <Typography variant="h6">{orderZipcode}</Typography>
          </CardContent>
        </Card>
      
            </Box>
          </Grid>
        </Grid>
        </Container>
        
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <Button
            disabled={activeStep === 0}
            variant="outlined"
            onClick={handleBack}
            sx={{ marginRight: "10px" }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit}>
              PLACE ORDER
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneOrder;
