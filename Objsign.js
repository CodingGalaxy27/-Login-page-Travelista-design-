import React, { useState } from 'react'
import travelimages from './travelimageshd.jpg'
import './travelsign.css';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import gimg from './bggimg.png' 
import fimg from './bgfaimg.png'
import apimg from  './bgapimg.png'
import tajimg from './bgtajimg.png'
import build from './bgbuildimg.png'
import aero from './bluaer.png'
const Objsign = () => {

  const[name,setname]=useState("")
  const[pass,setpassword]=useState("")
  let named ={
    setn:function(e){
      setname(e.target.value)      
    },
    setpass:function(s){
      setpassword(s.target.value)
    
    },
    greed: function ak(e){
      e.preventDefault();
      if(!name,!pass) return;setname("");
      if(!pass,!name) return ;setpassword("");
                 
         
  }

   
  }
 
    
  return (
<>
<form action={named.greed}>
  
<div className='tra'>

 <img src={travelimages} width={700} height={600} className='traimg'></img> 
 <h1 className="traquote">Travelista Tour's</h1>
 <h1 className='trasmallquote'> Travel far enough ,you meet Yourself </h1>
<label className='headtra'> Welcome</label>
<img src={aero} className='aero' ></img>


<img src={aero} className='aerop'></img>
<input type='text' value={name} className='traname' placeholder='Email Address' onChange={event=>named.setn(event)}></input>
<input type='Password'  value={pass} className='trapassword' placeholder='Password' onChange={event=>named.setpass(event)}></input>

<button className='trabtn' type='submit' onClick={(e)=>named.greed(e)} > Login</button>

<label className='or'>Or</label>


<label className='labelreg'> Don't  have account?</label><Link to="/sign" className='linksign'>Register here</Link>

<button className='goobtn'></button>
<img src={gimg} className='ggbtn'></img>

<button className='fabtn'></button>
<img src={fimg} className='fbtn'></img>
<button className='applebtn'></button>
<img src={apimg} className='apimg'></img>
<img src={tajimg} className='taj'></img>
<img src={build} className='build'></img>
</div>
</form>
</>
  )
}
export default Objsign
