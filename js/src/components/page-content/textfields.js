import {Box, TextField, Stack, Divider, Grid, idth } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import great from './inputR'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './myjs'

const Textfields = (props) => {
    const [value, setValue] = React.useState('');
    
    function handleChange(event){
        setValue(event.target.value);      
        
    }
    function doesNothing(){

        console.log("qwert")
        }
    
    
    var lable = "Ingredient "+props.text;
    var gun = "Ingredient "+(props.id+1)
    return (
        <>
        <Box flex = {1} flexDirection="row" padding={3}>
            <Stack spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                

                <Grid container spacing={2}>
                
                    <Grid item xs={1} >
                        
                    </Grid>
                    <Grid item xs={7}>
                        <TextField label= {gun} id={"Ing"+props.id} fullWidth variant="outlined" onChange={handleChange}/><br/><br/>
                    </Grid>
                    <Grid item xs={1}>
                    
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Amount" id="outlined-basic" variant="outlined" sx={{ m: 1}} InputProps={{startAdornment: <InputAdornment position="start">#/g</InputAdornment>,}}/><br/><br/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                </Grid>    

            </Stack>
        
        </Box>
        
        </>
    )
    
}
export default Textfields