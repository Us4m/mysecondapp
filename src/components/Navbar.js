import React from 'react'
import '../App.css';
import PropTypes from 'prop-types'
import logo from '../images/logo.png'
import iccc from '../images/Buy.svg'
import icc from '../images/Search.svg'
import menc from '../images/menu.svg'
import { Link } from 'react-router-dom';





export default function Navbar(props) {
  const nload = (e) =>{
    e.preventDefault();
    console.log("subscrivbe Sucessfully");
    
  }
  return (
    <>
    <div className="wrapper">
     <nav>
		<div className="header">
            <div className="logo">
            
            <div className="logoimg">
            <img src={logo}></img>
            </div>
            <div className="logotxt">
                Mobile Base
            </div>
        

        </div>
			
				
					
				<div className="left_item">
                    <div className="item">
						<Link to="/" className="active navbar-link nav-link">Home</Link>
						<Link to="/Buyphone" className="navbar-link nav-link">Buy Phones</Link>
						<Link to="/"className="navbar-link nav-link">Compare Phones</Link>
         
						
					</div>

                    <div className="icon">
                      <img src={iccc}></img>
                      <img src={icc}></img>
                    </div>
                </div>
                <div className="nritem">
                <img src={menc}></img>
                
           

                </div>          
			</div>
		</nav>
    

    </div>
    
    </>
  )
}
Navbar.prototype = {
  title: PropTypes.string

}

