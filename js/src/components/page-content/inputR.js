import {Box, TextField, Stack, Divider, Grid, idth } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import { useState } from 'react';

import Addtextfield from './addtextfield.js'
import Textfields from './textfields';


const Inputrecipe = () => {
    const [components, setComponents] = useState(["Sample Component"]);
    
    function addComponent() {
        setComponents([...components, "Sample Component"]) 
        
    }   
    
    const great=components.length;
    
    return (
        <div> 
        <br/>
        <Box flex = {1} flexDirection="row" padding={3}>
            <Stack spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                

                <Grid container spacing={2}>
                
                    <Grid item xs={1} >
                        
                    </Grid>
                    <Grid item xs={7} >
                        <TextField label= "Title of recipe" id="title" variant="outlined" /><br/><br/>
                    </Grid>
                    <Grid item xs={4} >
                        
                    </Grid>
                </Grid>
                
            </Stack>
        </Box>
      
      {components.map((item, i, great) => ( <Textfields key = {i} id = {i} text="sdfhsdkfnks"/> ))} 
      
      <Addtextfield onClick={addComponent} /> 
       
    </div> 
    )
    
}
export default Inputrecipe

