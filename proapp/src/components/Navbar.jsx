import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar  sx={{ 
        background: 'rgb(79,220,254)',
        background:'linear-gradient(0deg, rgba(79,220,254,1) 0%, rgba(185,168,255,1) 100%)'}}>
        <Toolbar>&nbsp;&nbsp;&nbsp;
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>FAXio</Typography>
            <Link to='/h'>
            <Button  variant='contained'color="off">HOME</Button>&nbsp;
            </Link>
            <Link to='/p'>
            <Button  variant='contained'color="off">PRODUCT</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
