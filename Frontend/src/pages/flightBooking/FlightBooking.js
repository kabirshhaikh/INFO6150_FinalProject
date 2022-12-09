import React,{ useState } from 'react'
import "./FlightBooking.css"

import { Header } from '../../components/headerListComp/Header'
import { NavBar } from '../../components/navBarComp/NavBar'
import { PassengerDetail } from '../../components/passengerDetails/PassengerDetail'
import {useLocation, useNavigate} from "react-router-dom"
import { FlightSeat } from '../../components/flightSeat/FlightSeat'

export const FlightBooking = () => {
    const location = useLocation();

    const id=(location.pathname.split("/")[2]);

    const spr = []

    const [options,setOptions] = useState(location.state.options)
    const adul = options.adult;

    const navigate = useNavigate();


    for (var i = 0; i < adul; i++) {
      spr.push(i);
    }

    const payments = ()=>{
      navigate("/payment",{})
    }

    return (
        <div>
          <NavBar></NavBar>
          <Header type="list"></Header>
    
          {
            spr.map((x, i ) => {
             return <PassengerDetail flightId={id}></PassengerDetail>;
            })
          }

          <FlightSeat flightId={id}></FlightSeat>


          <div className='btndiv'>
            <button  className='btnPayment' onClick={payments}>Pay</button>
          </div>
          
        </div>
  )
}
