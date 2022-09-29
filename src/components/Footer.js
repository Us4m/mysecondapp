import React from 'react'
import logo from '../images/logo.png'
import loca from '../images/loca.svg'

export default function Footer(prop) {
  return (
    <div className="futr">
        <div className="lfutr">
        <div className="logo">
            
            <div className="logoimg">
            <img src={logo}></img>
            </div>
            <div className="flogotxt" >
                {prop.title}
            </div>
        </div>

        <div className="loca">
        <div className="locaimg">
            <img src={loca}></img>
        </div>
        <div className="locatxt">
        Islamabad,G15 Mughal Plaza
        <br></br>Pakistan
        
        </div>
        </div>


        
        </div>
        <div className="rfutr">

        <div className="rfutri">
        <div className="i">Our Alexa Rank</div>
        <div className="ii">Contact us</div>
        <div className="iii">About us</div>
        <div className="iv">Review us</div>
        </div>

        <div className="rfutrii">
        <div className="i">Our Partners</div>
        <div className="ii">Our Team</div>
        <div className="iii">Licence</div>
        <div className="iv">Agreement</div>
        </div>

        <div className="rfutriii">
        <div className="i">Terms and Conditions</div>
        <div className="ii">Privacy</div>
        <div className="iii">Advertise</div>
        <div className="iv">Affiliate</div>
        </div>

        
    </div>

    </div>
  )
}
