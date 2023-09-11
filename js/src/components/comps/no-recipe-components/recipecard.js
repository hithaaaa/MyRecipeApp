import React from 'react';
import {Card, CardContent} from '@mui/material'

function Recipecard({keyword, clicked, setClicked, index}){
   
    const handleChange = () => {
        if (index==0){
            setClicked([true, clicked[1], clicked[2], clicked[3], clicked[4]]);
        }
        if (index==1){
            setClicked([clicked[0], true, clicked[2], clicked[3], clicked[4]]);
        }
        if (index==2){
            setClicked([clicked[0], clicked[1], true, clicked[3], clicked[4]]);
        }
        if (index==3){
            setClicked([clicked[0], clicked[1], clicked[2], true, clicked[4]]);
        }
        if (index==4){
            setClicked([clicked[0], clicked[1], clicked[2], clicked[3], true]);
        }   
    };
    


    return(
        <>
        <Card>
            <CardContent>
                {keyword}
            </CardContent>
            
        <button onClick={handleChange}>click</button>
        
        </Card>
        <br />
        </>
    )
}

export default Recipecard;