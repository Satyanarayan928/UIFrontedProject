import { AppBar, Button, Toolbar, Search, SearchIconWrapper, SearchIcon, StyleInputBase, Typography, Link, IconButton} from '@mui/material'; 
import { TextField, Container, Grid,  Box, GridList } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import bag_1 from './bag.jpg';

function FancyItems() {

    const categories = [{ id: 1, category: 'EarBud' }, { id: 2, category: 'Luxury Bag' }, { id: 3, category: 'Phone' }, { id: 4, category: 'shoe' }];

    const [shoeData, setShoeData] = useState([]);
    const [bagData, setBagData] = useState([]);
    const [earBud, setEarBud] = useState([]);
    const [phone, setPhone] = useState([]);
    const [data, setData] = useState(null);
    const [category, setCategory] = useState(null);
  
    const shoeCategory="shoe";
    const bagCategory="Luxury Bag";
    const phoneCategory="Phone";
    const earBudCategory="EarBud";
  
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
           
            
          </CardContent>
        </Card>
      ))}
    </div>
    </Grid>
             </Grid>
        </div>
    );
}

export default FancyItems;