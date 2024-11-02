
import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const Product = () => {
  return (
    <div>
      <Box >
        <h1>FORM</h1>
        <TextField  id="outlined-basic" label="Product Name" variant="outlined"/><br /><br />
        <TextField  id="outlined-basic" label="Description" variant="outlined"/><br /><br />
        <TextField  id="outlined-basic" label="Price" variant="outlined"/><br /><br />
        <TextField  id="outlined-basic" label=" Category" variant="outlined"/><br /><br />
        <Button variant='contained'>submit</Button>
      </Box>
    </div>
  );
}

export default Product;
