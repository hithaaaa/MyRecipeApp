import {Box, Stack} from '@mui/material'
import React from 'react'
import Options from '../page-content/homepageoption';

const Leftoptions = () => {
    return (
      // sx={{ height: 100, width: '100%' }} 
         <Box bgcolor="blue" style={{flex:1, flexDirection:"row",justifyContent:'space-between',padding:10}} >
            <Box position="fixed">
        
            {options.map(
            (options) => <Options key = {options.title} title = {options.title} description = {options.description} />
            )}
        
          </Box>
        </Box>
    )
}
 
const options = [
    {title: "I know what to make", description: "Store your recipes, search for inspo and estimate your final cooking time, yield, ingredient preparation and more!"},
    {title: "I don't know what to make", description: "Explore things to cook, find recipes from your avaiable ingredients, favorite cuisine or more!"},
  ]
export default Leftoptions