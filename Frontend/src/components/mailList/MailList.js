import React from 'react'
import "./MailList.css"
import { useContext, useState} from 'react';

import axios from 'axios';


export const MailList = () => {

  const [credentials,setCredentials] =useState({
    email:undefined
})

const handleChanges = (e)=>{

  setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
 
}

const handleEmail = async (e) =>{
  e.preventDefault();
  if(credentials)
  {
      try {
          const value= await axios.post("http://localhost:8800/api/auth/email",credentials);
      } 
      catch (error) {  
               
      }
  }
}

  return (
    <div className='mailContainer'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDesc'> Sign up and we'll send the best deals to you</span>
        <div className='mailIpContainer'>
            <input type="text" placeholder="Your Email" id="email" onChange={handleChanges}></input>
            <button onClick={handleEmail}>Subscribe</button>

        </div>
    </div>
  )
}
