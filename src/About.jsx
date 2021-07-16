import React from 'react';
// import Sumant4 from "./Images/Sumant4.jpeg";
import './about.css';

// import Sumant5 from "./Sumant5.jpg";
const About = () =>{
    return (
      <>
      
      <div id="about" style={{paddingLeft:'5%'}}>
      <br/> <br/> <br/><br/> <br/>
      {/* <h1 className="title" style={{fontSize:'200%'}}> <u style={{color:'yellow',paddingLeft:'42%'}}> ABOUT</u> <span style={{color:'white'}}> <u> ME </u> </span></h1> */}
      <p class="popout">
	<span>A</span>
	<span>B</span>
	<span>O</span>
	<span>U</span>
	<span>T</span> &nbsp;
	<span>M</span>
	<span>E</span>
	
</p>


    <h3 className="para" style={{marginLeft:'12%',marginRight:'10%'  ,color:"white",textAlign:'justify'}}>
      <b>  My name is Sumant Mulgaonkar, I am 21 years old. I born in Mumbai, India. Currently I am living 
        in Goa, India. I did my graduation in Bachelor in Computer Application(BCA). Now Currently I am 
        pursuing my 2nd year of Master in Computer Application(MCA). I am good at Web development and Game Development
         My short term goal is to get a job  in a good company. And my long term goal is to gain more knowledge and improve my skills.    
    Software i have used are Visual Studio Code, Visual Studio Community , Unity, Blender, Adobe Premeire Pro,  
   Anaconda, Mysql, xampp, ReactJS.</b>
   <br />
   <br />
   <br />  <br />
   <br />  </h3>
    <span style={{fontSize:25 ,color:'yellowgreen',paddingLeft:'10%'}} > <u>WHAT I KNOW </u></span>
    
    <br /> 
    <div class="skill-bars" style={{padding:'1% 10%'}}>
    <div className="bar">
      <div className="info">
        <span>HTML</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>PHP</span>
      </div>
      <div class="progress-line php">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>MySQL</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>JAVA</span>
      </div>
      <div class="progress-line java">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>C#</span>
      </div>
      <div class="progress-line csharp">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>MERN stack</span>
      </div>
      <div class="progress-line mern">
        <span></span>
      </div>
    </div>
  </div>

</div>
      </>
    )};

export default About;