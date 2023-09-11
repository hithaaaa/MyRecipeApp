import React from 'react';
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, Grid } from "@mui/material";

var TagArray=[]
var check=0;
function Main2({setChecked, checked}){
    
    const handleChange0 = (event) => {
        setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4]]);
        
    };
    const handleChange1 = (event) => {
        setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
        
    };
   
      const handleChange2 = (event) => {
        setChecked([checked[0], checked[2], event.target.checked, checked[3], checked[4]]);
       
    };  
      const handleChange3 = (event) => {
        setChecked([checked[0], checked[1],  checked[2], event.target.checked, checked[4]]);
        
    };  
      const handleChange4 = (event) => {
        setChecked([checked[0], checked[1],  checked[2], checked[4], event.target.checked]);
        
    };  

    
    return(
        <>
        {checked}
        <h4>No recipe- explore</h4>

        <Grid>
        <h3>Cuisines</h3>

        <Grid>
        <FormControlLabel
          label="Indian"
          control={<Checkbox
          checked={checked[0]}
          onChange={handleChange0}/>}
        />
        </Grid>
        <Grid>
        <FormControlLabel
            label="Italian"
            control={<Checkbox
            checked={checked[1]}
            onChange={handleChange1}
            />}
        />
        </Grid>
        <Grid>
        <FormControlLabel
            label="Japanese"
            control={<Checkbox
            checked={checked[2]}
            onChange={handleChange2}
            />}
        />
        </Grid>
        <h3>Diets</h3>
        <Grid>
        <FormControlLabel
            label="Vegetarian"
            control={<Checkbox
            checked={checked[3]}
            onChange={handleChange3}
            />}
        />
        </Grid>
        <Grid>
        <FormControlLabel
            label="Non vegetarian"
            control={<Checkbox
            checked={checked[4]}
            onChange={handleChange4}
            />}
        />
        </Grid>
        <p>Checkbox array is Tagarray accessible to app.js only</p>
        <p>There it makes arr with api call, it is passed to main3NR and main4nr</p>
        <p>app.js has clicked which is array of buttons. its passed to main3nr which logs button clicks indirectly. also  passed to main4nr </p>
        <p>main4nr compares clicked and arr and displays arr.title</p>
        </Grid>
        <button >Click</button>
        </>
        )
        
}

export default Main2;