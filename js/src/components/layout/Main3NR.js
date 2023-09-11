import React from 'react';
import Recipecard from '../comps/no-recipe-components/recipecard'
import {useState} from 'react'
function Main3({checked, clicked, setClicked, arr}){
    
    
        //api call here based on tagarray. arr stores final recipe json
    return(
        <>
        
        <h4>No recipe- explore</h4>
        
        {
        arr.map(
            (arr, i) => <Recipecard key={i} index={i.toString()} keyword={arr} clicked={clicked} setClicked={setClicked}/>
        )}
        
        </>
    )
}

export default Main3;