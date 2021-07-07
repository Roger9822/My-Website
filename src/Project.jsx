import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import foodie from "./foodie.png";
import airline from "./airline.png";
import tech from "./tech.png";
import dcskull from "./dcskull.png";
import dctext from "./dctext.png";
// import * as Scroll from 'react-scroll';
import "./project.css";
const Project = () =>{
return(
    <>
  
 <br/>
 <br/>
    <div className="space1">
    <figure className="image-block" style={{float:'left'}}>
	<h1>FOODIE</h1>
	<img src={foodie} alt="" style={{width:320, height:180}}/>
	<figcaption>
		<h3>
			More Info
		</h3>
	
		<p>“FOODIE” is Online Food Delivery System, As Online delivering Systems are getting famous , this is all due to the smart capabilities of the systems.
		  Some of the Systems developed in the past that inspire our project, we are elaborating their features and what makes them successful.</p>
		  <a href="https://github.com/Roger9822/" style={{textDecoration:'none'}}>	<button>
			Project Here
		</button></a>
	</figcaption>
</figure></div>

<div className="space2">
<figure className="image-block" style={{float:'left'}}>
	<h1>TECH HUB</h1>
	<img src={tech} alt="" style={{width:350, height:350}}/>
	<figcaption>
		<h3>
			More Info
		</h3>
		<p> “THE TECH HUB” which is Online PC BUILDING SYSTEM, Hardcore gaming and video edition requires the 
right gear, and there is no better way to dive headfirst into a first-person shooter or fastaction multiplayer than with a custom PC you built on your own.</p>
<a href="https://github.com/Roger9822/" style={{textDecoration:'none'}}><button>
		Project Here
		</button></a>
	</figcaption>
</figure></div>

<div className="space3">
<figure class="image-block" style={{float:'left'}}>
	<h1>FLY AIR</h1>
	<img src={airline} alt="" style={{width:350, height:350}}/>
	<figcaption>
		<h3>
			More Info
		</h3>
		<p>“Fly AIR” which is Online AIRLINE BOOKING SYSTEM. It contains the details about flight schedules and its fare tariffs, passengers reservations and ticket records. Fly  AIR almost operates 20 destinations in India namely like Goa, Mumbai, Pune , Delhi, Jaipur , etc.</p>
		<a href="https://github.com/Roger9822/" style={{textDecoration:'none'}}>	<button>
		Project Here
		</button></a>
	</figcaption>
</figure></div>

<div className="space4">
<figure class="image-block" style={{float:'left'}}>
	<h1>DELTA CRY</h1>
	<img src={dcskull} alt="" style={{width:350, height:300}}/>
	<figcaption>
		<h3>
			More Info
		</h3>
		<p> DeltaCry is a 3d fighting game such as Mortal Kombat, Dragon Ball Z, WWE and so on. It is comical in nature and all fighters attack with exaggerated movements.
		DeltaCry is being developed for Windows 10 PCs. It requires a hardware that supports OpenGL</p>
		<a href="https://github.com/Roger9822/" style={{textDecoration:'none'}}><button>
		Project Here
		</button></a>
	</figcaption>
</figure></div>

    </>
);
};

export default Project;