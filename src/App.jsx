import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Home';
import "./index.css";
// import Contact from './Contact';
import About from './About';
import Project from './Project';
import Navbar from './Navbar';
// import Welcome from './Welcome';

import "./index.css";
import { Switch, Route ,Redirect} from 'react-router-dom';
const App = () =>{
    return(
        <>
        {/* <Welcome/> */}
<div class="area" >

<ul class="circles">

        <Navbar/>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/project" component={Project}/>
            <Route exact path="/about" component={About}/>
            {/* <Route exact path="/contact" component={Contact}/> */}
            <Redirect to="/home"/>
            
        </Switch>
        
        
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
   </div>

        </>
    );
};

export default App;