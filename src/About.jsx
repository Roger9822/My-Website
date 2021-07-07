import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./about.css";
import Sumant4 from "./Sumant4.jpeg";
import Sumant5 from "./Sumant5.jpg";
const About = () =>{
return(
    <>
    <h1 style={{paddingLeft:'45%',fontSize:45}}> <u style={{color:'darkblue'}}> ABOUT</u> <span style={{color:'white'}}> <u> ME </u> </span></h1>
    <br/>
    <div style={{float:'right'}}>
  <p style={{fontSize: 21}}>
    <b>  My name is Sumant Mulgaonkar, I am 21 years old. I born in Mumbai, India. Currently I am living <br />
      in Goa, India. I did my graduation in Bachelor in Computer Application(BCA). Now Currently I am <br />
      pursuing my 2nd year of Master in Computer Application(MCA). I am good at Web development and Game Development<br/>
       My short term goal is to get a job  in a good company. And my long term goal is to gain more knowledge and improve my skills.     <br />
  Software i have used are Visual Studio Code, Visual Studio Community , Unity, Blender, Adobe Premeire Pro,   <br />
 Anaconda, Mysql, xampp, ReactJS.</b>
 <br />
 <br />
  <span style={{fontSize:25 ,color:'yellowgreen'}} > <u>WHAT I KNOW </u></span>
  </p>
 

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <h3 className="progress-title">HTML</h3>
            <div className="progress orange">
                <div className="progress-bar" style={{width:'90%', background:'red'}}>
                   
                </div>
            </div>
            <h3 className="progress-title">CSS</h3>
            <div className="progress blue">
                <div className="progress-bar" style={{width:'80%', background:'yellow'}}>
                 
                </div>
            </div>
            <h3 className="progress-title">PHP</h3>
            <div className="progress blue">
                <div className="progress-bar" style={{width:'75%', background:'blue'}}>
                 
                </div>
            </div>
            <h3 className="progress-title">Javascript</h3>
            <div className="progress blue">
                <div className="progress-bar" style={{width:'68%', background:'green'}}>
                    
                </div>
            </div>
            <h3 className="progress-title">JAVA</h3>
            <div className="progress blue">
                <div className="progress-bar" style={{width:'40%', background:'black'}}>
                </div>
            </div>

            <h3 className="progress-title">SQL</h3>
            <div className="progress blue">
                <div className="progress-bar" style={{width:'85%', background:'orange'}}>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

   <img style={{width:'30%', height:'75%',paddingLeft:'2%'}} src={Sumant4} alt="...." className="dp2" />
  
    </>
);
};

export default About;