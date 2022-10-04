import React from 'react'
import apl from '../images/Group 54.svg'
import ss from '../images/Group 55.svg'
import mt from '../images/Group 56.svg'
import hw from '../images/Group 57.svg'
import wvd from '../images/Group 58.svg'
import vdd from '../images/Group 117.svg'
import vvd from '../images/Group 118.svg'
import op from '../images/One Plus 10.svg'
import opo from '../images/Oppo 1.svg'

export default function Byph() {
  return (
    <div>
        <div className="container_ii">
            <div className="label">
               <b> Explore the <span>Brands</span> </b>
            </div>
            <div className="ph_logo">
                <div className="litem1"><img src={wvd}></img></div>
                <div className="litem1"> <img src={ss}></img></div>
                <div className="litem1"> <img src={mt}></img></div>
                <div className="litem1"> <img src={hw}></img></div>
               
                

            </div>
            <div className="ph_logo">
                <div className="litem1"> <img src={apl}></img></div>
                <div className="litem1"> <img src={vdd}></img></div>
                <div className="litem1"> <img src={vvd}></img></div>
                <div className="litem1"> <img src={opo}></img></div>   
            </div>
            
        </div>
    </div>
  )
}
