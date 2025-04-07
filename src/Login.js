import { Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { TextField, Button, Container, Grid,  Box } from '@mui/material';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import { NavLink } from "react-router-dom";
import { AppBar,  Toolbar,  StyleInputBase, Link} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';





 
 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  var myBoolean = true;


   

  const headers=new Headers();
  headers.append("Accept", "application/json");
  headers.append('Accept-Encoding', 'gzip, deflate, br');

  const navigate=useNavigate();
  const navigateToAdmin = () =>{
    navigate("/admin");
  }
  const navigateToUser = () =>{
    navigate("/user");
  }
  const handleInput = (e) => {
    alert(e.target.value);
     
     
     

    

  };

   
 


   

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      setLoading(false);
      return;
    }else{
      try{
        const values = {username: username, password: password}
        console.log("values:"+values);
        const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImZpcnN0TmFtZSI6IiAiLCJsYXN0TmFtZSI6IiAiLCJleHAiOjE5NTU1MzQ1Mjl9.yNjzsVVfyrjaErJ8CVgPXyGIs2Ve2TQ9h2okbWaz1y0'}
                  axios.post('http://localhost:8080/api/auth/signin', values, { headers })
    .then((response) => {
      console.log("success")
      setResponse(response);
      console.log("RESPONSE RECEIVED:", response);
      console.log(response.data.token);
      console.log(response.data.email);
      console.log(response.data.roles);
      let adminTest="admin";
      let userTest="user";
      response.data.roles.forEach(element => {
        console.log("element:", element);
        console.log("AdminTest:", element === adminTest);
        console.log("UserTest:", element === userTest);

        element === adminTest?setIsAdmin(true):setIsAdmin(false);

        element === userTest?setIsUser(true):setIsUser(false);

         
        
      });
     
     console.log("Admin Check:"+isAdmin);
     console.log("User Check:"+isUser);

     if (isAdmin) {
       
          console.log("admin");
          navigate('/admin');
          
    }

    if (isUser) {
       
          console.log("user");
          navigate('/user');
          
    }
    
    }
           );
     }catch(err){
             console.err(err);
          }
    }

     console.log("FinalResponse:"+response);
  }
    return (
      
      <div className="Login">
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
        <Button style={{backgroundColor: "#0000FF", fontSize: "10px"}} variant="contained" align="right">Home</Button>
      </Grid>
       </Grid>
      </AppBar>
      </Box>
        </div>
        
        <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Username Address"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
          
          
          <NavLink to={"/signup"}>Don't hav an account Sign Up</NavLink>

              
          
           

        </Box>
      </Box>
    </Container>

        
      </div>
    );
  }
  
  export default Login;
  