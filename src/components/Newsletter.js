import React, { useState } from 'react'
import lil from '../images/limgl.svg'
import lir from '../images/rimgl.svg'
import icm from '../images/icemail.svg'

export default function Newsletter() {
  const honchng = () =>{
    console.log("subscribe Sucessfully");
  }
  
  const subscribed = (e) =>{
    e.preventDefault();
    console.log("subscrivbe Sucessfully");
    setText("Subscribe Sucessfully");
  }
  const [text, setText] = useState("Enter your Email");
  // 
  return (
    
        <div className="newsl">
            <div className="newspl">
            <img src={lil}></img>
            </div>
            <div className="newslpm">
            <div className="newsh">
            <h4><img src={icm}></img> &nbsp; Subscribe to our Newsletter</h4>
            
            </div>
            <div className="newsp">
           <p>We will update you with latest devices and also we’ll let you know about the best your should buy.</p>
            </div>
            <div className="newsf">
            <form>
                <input type="text" name="name" onChange={honchng} value={text} />
              <input type="submit" onClick={(e)=>subscribed(e)} value="Submit" ></input>

              
            </form>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
              </div>

              <div className="row">
                <input type="submit" onClick={subscribed} value="Submit"></input>
              </div>
            </div>
            </div>
            <div className="newslpr">
            <img src={lir}></img>
            </div>
        </div>

  )
}
