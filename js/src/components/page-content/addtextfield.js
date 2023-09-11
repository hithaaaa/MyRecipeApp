import {Box, TextField, Stack, Divider, Grid, idth } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './myjs'


const Addtextfield = (props) => {
    return (
        <Box flex = {1} flexDirection="row" padding={3}>
            <Stack spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                <br /><br />
                

                <Grid container spacing={2}>
                
                    <Grid item xs={9} >
                    
                    </Grid>
                    <Grid item xs={1} >
                    <input type="submit" />
                    </Grid>
                    <Grid item xs={2}>
                        <Fab size="small" color="secondary" aria-label="add">
                        
                            <AddIcon  onClick={props.onClick}/>
                           
                        </Fab>   
                    </Grid>
                </Grid>       
                 

            </Stack>
        </Box>
        
        
    )
}

export default Addtextfield