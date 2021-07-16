import React from 'react';
import "./contact.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon1 from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Contact = () =>{
    return (
      <>
      <br/><br/><br/>
      <br/><br/><br/>
<div id="contact">
<div className="border">

<div className="links">
Contact Me:  &nbsp; &nbsp;&nbsp; &nbsp;
<a target="_sumant" href="https://www.instagram.com/roger_9822/"><InstagramIcon  /></a>&nbsp;&nbsp;&nbsp; &nbsp;
<a target="_sumant" href="mailto: mulgaonkarsumant163@gmail.com"><EmailIcon/></a> &nbsp;&nbsp;&nbsp; &nbsp;
<a target="_sumant" href="https://twitter.com/Sumant98221"><TwitterIcon/></a> &nbsp;&nbsp;&nbsp; &nbsp;
<a target="_sumant" href="https://github.com/Roger9822/"><GitHubIcon/></a>&nbsp; &nbsp;&nbsp; &nbsp;
<a target="_sumant" href="https://www.facebook.com/sumant.mulgaonkar/"><FacebookIcon/></a> &nbsp; &nbsp;&nbsp; &nbsp;
<a target="_sumant" href="https://www.linkedin.com/in/sumant-mulgaonkar-99a731175/"><LinkedInIcon/></a>     
</div>

<div className="details" >
<sub><LocationOnIcon /></sub> Kavlekar Towers, Ansabhat, Mapusa, Goa. &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
<sub><PhoneIcon/></sub> 7030463246&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
<sub><EmailIcon1/></sub> mulgaonkarsumant163@gmail.com
 </div>

</div>
</div>
      </>
        
    )
}

export default Contact;