
import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

import Options from './components/page-content/homepageoption';
import {Box, Stack} from '@mui/material'
import Leftoptions from './components/page-layout/leftoptions';
import Filters from './components/page-layout/filters';
import Cardsregion from './components/page-layout/cardsregion';
import Rightdisplay from './components/page-layout/rightdisplay';
import {theme} from "./theme";
import { ThemeProvider } from '@mui/material';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    
      <div className="App" >
        <ThemeProvider theme={theme}>
        <Box sx={{ height:100, width: '100%' }}>
          
        <Stack direction="row" spacing={12} justify-content="space-between, center">
          
          <Leftoptions />
          
          <Filters />
          
          <Cardsregion />
          <Rightdisplay />

        

        </Stack>
        </Box>
        </ThemeProvider>
      </div>
    
  );
}



export default App;
