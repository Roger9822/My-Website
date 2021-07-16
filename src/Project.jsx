import React from 'react';
import foodie from "./Images/foodie.png";
import airline from "./Images/airline.png";
import tech from "./Images/tech.png";
import dcskull from "./Images/dcskull.png";
import "./project.css";

const Project = () =>{
return(
    <>
  
 <br/>
 <br/>
 <div id="project">
 <div className="header">
 <h1><b>My Projects</b></h1>
    <h2>Hey There! Check Out My Projects</h2>
  </div>


  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Foodie</h2>
      <p style={{fontSize:'110%'}}>“FOODIE” is Online Food Delivery System, As Online delivering Systems are getting famous , this is all due to the smart capabilities of the systems.
		  Some of the Systems developed in the past that inspire our project, we are elaborating their features and what makes them successful.  <a href="https://github.com/Roger9822/">Project Here</a></p>
      <img src={foodie} style={{width:'40%', height:'40%'}} alt=""/>
    </div>
	

    <div class="box red">
      <h2>Tech HUB</h2>
      <p style={{fontSize:'110%'}}>“THE TECH HUB” which is Online PC BUILDING SYSTEM, Hardcore gaming and video edition requires the 
right gear, and there is no better way to dive headfirst into a first-person shooter or fastaction multiplayer than with a custom PC you built on your own.  <a href="https://github.com/Roger9822/">Project Here</a></p>
      <img src={tech} style={{width:'40%', height:'40%'}} alt=""/>
    </div>
   

    <div class="box box-down blue">
      <h2>FLY Air</h2>
      <p style={{fontSize:'110%'}}>“Fly AIR” which is Online AIRLINE BOOKING SYSTEM. It contains the details about flight schedules and its fare tariffs, passengers reservations and ticket records. Fly  AIR almost operates 20 destinations in India namely 
	  like Goa, Mumbai, Pune , Delhi, Jaipur , etc.  <a href="https://github.com/Roger9822/">Project Here</a></p>
      <img src={airline} style={{width:'40%', height:'40%'}} alt=""/>
    </div>
	
  </div>
  <div class="row2-container">
  <div class="box orange">
      <h2>Delta Cry</h2>
      <p style={{fontSize:'110%'}}>DeltaCry is a 3d fighting game such as Mortal Kombat, Dragon Ball Z, WWE and so on. It is comical in nature and all fighters attack with exaggerated movements.
		DeltaCry is being developed for Windows 10 PCs. It requires a hardware that supports OpenGL.  <a href="https://github.com/Roger9822/">Project Here</a></p>
      <img src={dcskull} style={{width:'40%', height:'40%'}} alt=""/>
    </div>

	
  </div>
  
  </div>
</>
    )};

    export default Project;