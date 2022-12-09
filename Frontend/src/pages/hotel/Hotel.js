//represnts each hotel

import React, {useState,useContext} from 'react'
import "./hotel.css"
import { NavBar } from '../../components/navBarComp/NavBar.js'
import {Header} from "../../components/headerListComp/Header.js"
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation,useNavigate } from 'react-router-dom'
import {SearchContext} from '../../context/searchContext'
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/reserve'


export const Hotel = () => {
  
  const location = useLocation();
  const id=(location.pathname.split("/")[2]);
  console.log(id);

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)

  const {data,loading,error} = useFetch(`http://localhost:8800/api/hotels/${id}`);
  
  const {dates,options} = useContext(SearchContext);

  const {user} = useContext(AuthContext);
  const navigator= useNavigate();

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  function dateDifference(date1,date2)
  {
    const timeDiff = Math.abs(date2.getTime()- date1.getTime());
    const diffDays= Math.ceil((timeDiff)/(1000*60*60*24));
    return diffDays;
  }

  const diffdates = (dateDifference(dates[0].endDate,dates[0].startDate))

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleBookingPage = ()=>{
    if(user)
    {
        setOpenModel(true);
    }else
    {
      navigator('/login')
    }
  }

  const handleMove = (direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber =slideNumber === 0 ? 5 : slideNumber -1
    }
    else{
      newSlideNumber =slideNumber === 5 ? 0 : slideNumber +1
    }

    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <NavBar></NavBar>
      <Header type="list"></Header>
      {
        loading ? "Loading Please Wait":
        (
        <div className='hotelContainer'>
        { open && (
          <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowl" onClick={()=>handleMove("l")}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircleArrowRight} className = "arrowr" onClick={()=>handleMove("r")}></FontAwesomeIcon>
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} 
              className='sliderimg'></img>
            </div>
            
        </div>)}
        <div className='hotelWrapper'>
              <h1 className='hotelName'>{data.name}</h1>
              <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
              <span>{data.address}</span>
              </div>
              <span className='hotelDist'>
                Excellent location - {data.distance}m from time square
              </span>
              <span className='hotelPrice'>
                Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
              </span>
              <div className='hotelImages'>
                  {photos.map((photo,i)=>(
                    <div className='hotelImgWrap'>
                      <img onClick={()=>handleOpen(i)}
                      src={photo.src} className="img"></img>
                    </div>
                  ))}
              </div>
              <div className='hotelDet'>
                <div className='hotelDetText'>
                  <h1 className='title'>{data.title}</h1>
                  <p className='desc'>
                    {data.description}</p>
                  </div>
                <div className='hotelDetPrice'>
                    <h1>Perfect for a {diffdates}-night stay!</h1>
                    <span>
                      Located in the real heart of NYC, this property has an
                      excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>${diffdates*data.cheapestPrice*options.room}</b> ({diffdates} nights)
                    </h2>
                    <button onClick={handleBookingPage}>Book Now!</button>
                </div>
              </div>
          </div>
          <MailList></MailList>
          <Footer></Footer>
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}></Reserve>}
      </div>
    
  )
}
