import React from 'react';
import Logo from './Logo.jpg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { NavLink } from 'react-router-dom';
import "./default.css";

const Navbar = () =>{
    return( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{marginLeft:-29}} >
  <div className="container-fluid" style={{fontSize: 25}}>
    <img style={{width: 55 ,height: 55,margin : 8}} src ={Logo} alt="logo"/>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
      <div className="navbar-nav">
        <NavLink className="nav-link neon"  to="/home">HOME </NavLink>
        <NavLink className="nav-link neon" to="/project" > PROJECT</NavLink>
        <NavLink className="nav-link neon" to="/about" >ABOUT</NavLink>
        {/* <NavLink className="nav-link neon" to="/contact"> CONTACT </NavLink> */}
      
      </div>
    </div>
<a target="_sumant" href="https://www.instagram.com/roger_9822/"><InstagramIcon  style={{fontSize:40}} /></a>&nbsp;&nbsp;
<a target="_sumant" href="mailto: mulgaonkarsumant163@gmail.com"><EmailIcon style={{fontSize:40}}/></a> &nbsp;&nbsp;
<a target="_sumant" href="https://twitter.com/Sumant98221"><TwitterIcon style={{fontSize:40}}/></a> &nbsp;&nbsp;
<a target="_sumant" href="https://github.com/Roger9822/"><GitHubIcon style={{fontSize:40}}/></a>&nbsp; &nbsp;
<a target="_sumant" href="https://www.facebook.com/sumant.mulgaonkar/"><FacebookIcon style={{fontSize:40}}/></a>
    
    </div>


  
</nav>
</>)
}

export default Navbar;