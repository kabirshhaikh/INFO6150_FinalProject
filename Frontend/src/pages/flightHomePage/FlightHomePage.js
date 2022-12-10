import React from 'react'
import { FeaturedCityFlight } from '../../components/featuredCitiesFlight/FeaturedCityFlight'
import { FeaturedOperatir } from '../../components/featuredOperator/FeaturedOperatir'
import { FlightLevel } from '../../components/flightLevels/FlightLevel'
import { Footer } from '../../components/footer/Footer'
import { HeaderFlight } from '../../components/headerFlight/HeaderFlight'
import { Header } from '../../components/headerListComp/Header'
import { NavBar } from '../../components/navBarComp/NavBar'
import { MailList } from '../../components/mailList/MailList'
import "./FlightHomePage.css"


export const FlightHomePage = () => {
  return (
    <div>
    <NavBar></NavBar>
   <HeaderFlight></HeaderFlight>
   <div className='container'>
   <FeaturedCityFlight></FeaturedCityFlight>
   <h1 className='title1'>Browse by level</h1>
   <FlightLevel></FlightLevel>
   <h1 className='title2'>Best Airways</h1>
   <FeaturedOperatir></FeaturedOperatir>
   <MailList></MailList>
   <Footer></Footer>
   </div>
    </div>
  
  )
}
