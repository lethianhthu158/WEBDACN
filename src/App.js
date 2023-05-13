
import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';

// import { ProductLayout } from './components/productlayout';



function App() {
  return ( 
     
    <Routes>    
    <Route path='/' element={<Homepage/>}/>
    
    </Routes>
   
    
 
  );
}

export default App;
