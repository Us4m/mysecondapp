import React from 'react'
import '../App.css';
import PropTypes from 'prop-types'
import logo from '../images/logo.png'
import iccc from '../images/Buy.svg'
import icc from '../images/Search.svg'

import menc from '../images/menu.svg'




export default function Navbar(props) {
  const nload = (e) =>{
    e.preventDefault();
    console.log("subscrivbe Sucessfully");
    
  }
  return (
    <div className="wrapper">
     <nav>
		<div className="header">
            <div className="logo">
            
            <div className="logoimg">
            <img src={logo}></img>
            </div>
            <div className="logotxt">
                {props.title}
            </div>
        

        </div>
			
				
					
				<div className="left_item">
                    <div className="item">
						<a href="\" onClick={nload} className="active navbar-link nav-link">Home</a>
						<a href="\" onClick={nload}className="navbar-link nav-link">Buy Phones</a>
						<a href="\" onClick={nload}className="navbar-link nav-link">Compare Phones</a>
         
						
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
  )
}
Navbar.prototype = {
  title: PropTypes.string

}

