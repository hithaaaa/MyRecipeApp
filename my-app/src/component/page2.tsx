import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Page3 from './page3';
import { MantineProvider,Button } from '@mantine/core';

function page2() {
    return (
      <Router>
      <div>
        
        <Button><Link to="/page3">Hey kid, wanna go to Page 3?</Link></Button>
        <p>I'm page 2</p>
      </div>
      <Routes>

                
           <Route path='/page3' element={< Page3 />}></Route>
                 
          </Routes>
      </Router>
    );
  }
  

  export default page2;