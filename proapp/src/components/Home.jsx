import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';


const Home = () => {
    var[pro,setpro]=useState([])
    useEffect(()=>{

 
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        setpro(response.data)
        console.log(pro)
    })
},[])
  return (
    <div><br /><br />
    <Grid container spacing={2}>
        {pro.map((val)=>{
            return(
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 350 }}>
                    <CardMedia sx={{ height: 250 }} image={val.image}/>
        <CardContent>
            <Typography >{val.title}</Typography>
            <Typography >Price -{val.price}</Typography>
            <Typography >Category-{val.category}</Typography>
      </CardContent>
      </Card>
      </Grid>
    
            )
        })
        }
     </Grid>
    </div>
  );
}

export default Home;
