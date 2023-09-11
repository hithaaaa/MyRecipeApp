import React from 'react';

function Main4({clicked, arr}){
    
    var final=[]
    for (let i=0;i<clicked.length; i++){
        if (clicked[i]){
            final.push(arr[i])
        }
    }
    return(
        <>
        <h4>No recipe- explore</h4>
        <button>Show rec</button>
        <p>{final}</p>
        </>
    )
}

export default Main4;