import {Box} from '@mui/material'
import React from 'react'
import'../page-content/textfields'
const Rightdisplay = () => {
    return (
        <Box bgcolor="orange" flex = {1} justifyContent="center">
            {/* Might cause problems */}
            <Box position="fixed">
            Display all recipes
                <div id="hey">d</div>
            </Box>
        </Box>
    )
    document.getElementById("hey").value = document.getElementById("outlined-name").value

}

export default Rightdisplay