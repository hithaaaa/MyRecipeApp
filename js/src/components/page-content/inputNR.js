import Recipecard from './recipeCard';
import {Box, TextField, Stack, Divider, Grid } from '@mui/material'
import React from 'react'
import Uploadr from '../page-content/uploadR'
import { useState } from 'react';
//import {arru} from '../page-content/uploadR'
var arr=[{}];
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=43a4e9d10c734a80b463bce2e9f79b72", requestOptions)
        .then(response => response.json())
        
    .then(result => {		
        
        for (var i = 0; i < 10; i++) {
            arr.push({"recipeName": result["recipes"][i]["title"], "date": "30", "index":i});
            //console.log(arr)
        }
    })
   .catch(error => console.log('error', error));

const Inputnr = () => {
    
    return (
        
        <Box alignItems="center">
             
                
                 {arr.map(
                    (arr) => <Recipecard key = {(arr.index)} recipeName = {arr.recipeName} date={arr.date} />
                 )}
                
            
        </ Box>
        
    )
    
}

export default Inputnr

   