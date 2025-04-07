import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Toolbar, Search, SearchIconWrapper, SearchIcon, StyleInputBase, Typography, Link, IconButton} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { TextField} from '@mui/material';
import { Container, Grid,  Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Redirect } from 'react-router';
import { useParams } from "react-router-dom";



function modifyProduct() {
  const { id } = useParams(); 
    const navigate=useNavigate();
  const navigateToLogin = () =>{
       navigate("/login");
  };
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [availabileItems, setAvailabileItems] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    manufacturer: '',
    availabileItems: ''
  })

   

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    
      console.log("validated");
      const values = {name: name, category: category, price: price, description: description, manufacturer: manufacturer, availabileItems: availabileItems}
      console.log("values:"+values);
      const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwMTY1OTh9.6jczb2ge6n6bQtEsAPHmHYqKWdQCAhwZfAK5Zl3Sjt4'}
      axios.post('http://localhost:8080/api/products', values, { headers })
      .then((response) => {
        console.log("RESPONSE RECEIVED:", response);
      });

    
  }

    return (
        <div>
          <p>The ID passed is: {id}</p>
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
      <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            label="category"
            type="category"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            label="price"
            type="price"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="description"
            type="description"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="manufacturer"
            type="manufacturer"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
           
        </Box>
      </Box>
    </Container>

                </div>
    );
}

export default modifyProduct;
