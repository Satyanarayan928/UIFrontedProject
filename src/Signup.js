import { Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { TextField, Button, Container, Grid,  Box, AppBar } from '@mui/material';
import { FormControl } from '@mui/material';
import { blue } from "@mui/material/colors";
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';



function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');

    const headers=new Headers();
    headers.append("Accept", "application/json");
    headers.append('Accept-Encoding', 'gzip, deflate, br');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        if (!email || !password || !firstName || !lastName || !contactNumber) {
            setError('Please enter all fields.');
            setLoading(false);
            return;
          }else{
                try{
                    const values = {email: email, password: password, firstName: firstName, lastName: lastName, contactNumber: contactNumber}
                    console.log("values:"+values);
                    const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTYwNzA4MTd9.SM74WBpT50wobxtBcyuu1HJYDctRKfQoLiTcj2JyoIk'}
                    axios.post('http://localhost:8080/api/auth/signup', values, { headers })
                    .then((response) => {
                    console.log("RESPONSE RECEIVED:", response);
                    });

                }catch(err){
                    console.err(err);

                }
          }

    }

    const navigate=useNavigate();
    const navigateToLogin = () =>{
      navigate("/login");
    };
  

    return (
        <div className="Signup">

             
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {error && <Typography color="error">{error}</Typography>}
           
          <TextField
            label="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="firstName"
            type="firstName"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="lastName"
            type="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
           
           
           
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
           
        </Box>
      </Box>
    </Container>


        </div>
    );
}

export default Signup;
