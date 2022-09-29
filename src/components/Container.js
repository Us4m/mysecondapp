import React from 'react'
import pimg from '../images/OnePlus-9-Pro-924-removebg-preview 1.png'

export default function Container() {
  return (
    <div className="wrapper">
                <div className="container_i">
            <div className="leftbox">
                <div className="up">
                <h1>
                    Buy the Best Phone
                </h1>
                <p>It’s always difficult to decide the  phone we buy,<br></br> 
                    so we can make that easier for you. </p>

                    <div className="btn">
                        <button type="button">Find out how</button>
                        <button type="button" >Explore us </button>
                    </div>
                </div>

                    <div className="details">
                        
                            <div className="item_1">
                                <h4>600</h4>
                            <p>Brands</p>
                            </div>
                            <div className="item_2">
                                <h4>18000</h4>
                                <p>Devices</p>
                            </div>
                            <div className="item_3">
                                <h4>25 Billion</h4>
                                <p>Active Devices</p>
                            </div>
                        
                    </div>

            </div>

            <div className="rightbox">
                <div className="post">
                    <img src={pimg}></img>
                    <div className="item_post">
                        <h4>Two Plus 9 Pro</h4>
                        <p>Top Pick of the Month<i className="ri-fire-fill"></i></p>
                    </div>

                </div>
               
                   

               
            </div>
        </div>
   
    </div>
  )
}
