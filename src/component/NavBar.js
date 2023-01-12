import React from "react";
import { Link } from "react-router-dom";
function NavBar(params) {
    return <div className="navbar">
              <ul>
                <li><a href="/">HOME</a></li>
                <li className="dropdown">
                    <a href="#c" className="dropbtn">MOBILE</a>
                    <div className="dropdown-content">
                        <Link to={"/mobile"}> mobile</Link>
                        <a href="#c" ><p>soon..</p> </a>
                        
                    </div>
                </li>
                <li className="dropdown">
                    <a href="www.google.com">SMART WATCH</a>
                    <div className="dropdown-content">
                        <a href="#c" > <p>soon..</p></a>
                        <a href="#c" > <p>soon..</p></a>
                        <a href="#c" > <p>soon..</p></a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="www.youtube.com">SMART TV</a>
                    <div className="dropdown-content">
                        <a href="#c" > <p>soon..</p></a>
                        <a href="#c" > <p>soon..</p></a>
                        <a href="#c" > <p>soon..</p></a>
                    </div>
                    
                </li>
               
            </ul>
            
    </div>
    
}
//<li> <input type="color" id='color' onChange={handleColorInput}/></li>
// const handleColorInput = e => document.documentElement.style.setProperty("--primary_color", e.target.value)

export default NavBar