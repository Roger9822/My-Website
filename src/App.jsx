import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import About from './About';
import Contact from './Contact';
 import './App.css';
const App = () =>{
    return (
      <>
<div className="back">
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div> 
<Navbar/>
 <Home/>
 <About/>
 <Project/>
 <Contact/>
</div>
      </>
        
    )
}

export default App;