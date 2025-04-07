import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Toolbar, Search, SearchIconWrapper, SearchIcon, StyleInputBase, Typography, Link, IconButton} from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { TextField, Container, Grid,  Box, GridList } from '@mui/material';



function App() {
  const navigate=useNavigate();
  const navigateToLogin = () =>{
       navigate("/login");
  };
  return (
    <div className="App">
       
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

       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
