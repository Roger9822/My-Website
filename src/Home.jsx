import React from 'react';
import Sumant3 from "./Images/Sumant3.jpg";
import  "./default.css";
import Typed from "react-typed";
const Home = () =>{
    return (
        <>
       <br></br><br></br><br></br>  <br></br>
       
<div id="head">
    <div className="info-c">
    <br></br><br></br>
    <h1 className="hi">   Hi I'm </h1>
    <h1 className="name"><span>Sumant Mulgaonkar </span> </h1>
    <br/>
    <p className="line"> I am {' '}

        <Typed
                    className="typed-text"
                    strings={["Web Developer", "Game Designer","Web Designer"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
    </p>
    </div>
    <br/>
  <div className="img-container" >
  <img src={Sumant3} className="imagedp" alt="Sumant" />
  </div>
    
    </div>


        </>
        
    )
}
export default Home;