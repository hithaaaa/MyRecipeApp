import React, { useState } from 'react';
import {Box} from '@mui/material';
import Main2NR from './Main2NR';
import Main3NR from './Main3NR';
import Main4NR from './Main4NR';
import Main2R from './Main2R';
import Main3R from './Main3R';
import Main4R from './Main4R';

function Main1(){
    const [active, setActive] = useState("Firstcard");
    return(
        <>
        <Box bg-color='yellow' onClick={() => setActive("Norecipe")}>
            <p>NR card</p>
        </Box>
        <Box bg-color='red' onClick={() => setActive("Recipe")}>
            <p>R card</p>
        </Box>
        {active === "Norecipe" && <Main2NR /> && <Main3NR /> && <Main4NR />}
        {active === "Recipe" && <Main2R /> && <Main3R /> && <Main4R />}
        
        </>
    )
}

export default Main1;