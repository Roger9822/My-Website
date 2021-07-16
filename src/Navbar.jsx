
import React from 'react';
import './navbar.css';
// import  logo from './Images/Logo.jpg';
const Navbar = () =>{
    return (
        <>
<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title" style={{paddingLeft:'5%'}}>
      Sumant Mulgaonkar
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="#head">Home</a>
    <a href="#about" >About</a>
    <a href="#project">Project</a>
    <a href="#contact">Contact</a>
  </div>
</div>
        </>
        
    )};

export default Navbar;