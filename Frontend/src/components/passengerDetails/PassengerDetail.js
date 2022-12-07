import React from 'react'
import "./PassengerDetail.css"


export const PassengerDetail = ({flightId}) => {

  return (
    <div className='mainContainerForm'>
        <div className='detailsForm'>
            <div className='dfItem'>
                <label>Name</label>
                <input type="text" required></input>
            </div>
            <div className='dfItem'>
                <label>Mobile</label>
                <input type="text" required></input>
            </div>
            <div className='dfItem'>
                <label>Age</label>
                <input type="text" required></input>
            </div>
            <div className='dfItem'>
                <label>Passport</label>
                <input type="text" required></input>
            </div>
        </div>

    </div> 
  )
}




