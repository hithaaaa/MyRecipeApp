import {Box} from '@mui/material'
import React from 'react'
import InputR from '../page-content/inputR'
import InputNR from '../page-content/inputNR'
import Cards from '../page-content/recipeCard'

const Cardsregion = () => {
    return (
        <Box flex={3} padding={8}>
            <InputNR />
        </Box >
    )
}

export default Cardsregion