

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Sumant from "./Sumant.jpg";
// import Sumant2 from "./Sumant2.jpg";
import Sumant3 from "./Sumant3.jpg";
import  "./default.css";



const Home = () =>{
return(
    <>
    <div>
    <div style={{paddingLeft:'20%',paddingTop:'10%',float:'left', width:'60%'}}>
    <h1 style={{fontSize:50 , color:'white'}} className="name"> <span>  Hi I'm Sumant Mulgaonkar </span></h1>
  
    <p style={{fontSize:40}}> I am Web Designer </p>
    <p style={{fontSize:40}}> I am Game Developer</p>
    
    
    </div>

  <div className="img-container" style={{float:'right' }} >
  <img src={Sumant3} className="imagedp" alt="Sumant" />
  </div>
</div>
    </>
);
};

export default Home;