import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Page2 from './component/page2';
import Page3 from './component/page3';
import logo from './logo.svg';

import { MantineProvider,Button } from '@mantine/core';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <MantineProvider theme={{ fontFamily: 'Open Sans', colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
           <div className="App">
            <ul>
            <li>
                <Link to="/">page 1</Link>
              </li>
              
              <li>
                <Link to="/page2">page 2</Link>
              </li>
              <li>
                <Link to="/page3">page 3</Link>
              </li>
            
            </ul>
           <Routes>

                 <Route path='/page2' element= {< Page2 />}></Route>
                 <Route path='/page3' element={< Page3 />}></Route>
                 
          </Routes>
          </div>
          </MantineProvider>  
       </Router>
       
   );
  }
}

// function App() {
//   return (
    
//     <div className="App">
//       <Button>Hello world!</Button>
//       <p>I'm mister fancy font</p>
//     </div>
    
//   );
// }
function WithProvider() {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}


export default App;
