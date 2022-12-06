//list of properties

import React from 'react'
import "./FeaturedProperty.css"
import turkey from "../../pics/turkey.jpeg"
import useFetch from '../../hooks/useFetch'
import paris from "../../pics/img1.jpeg"
import pars from '../../pics/img2.jpeg'
import pa from '../../pics/img3.jpeg'

export const FeaturedProperty = () => {

    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels?featured=true&limit=3")

    const images=[turkey,paris,pa]

  return (
    <div className='featureProp'>
        {loading?   "Loading please wait ": 
        <>
        {images && data.map((item,i) => (

            <div className='featurePropItem'>
                <img className = "featurePropImg" src={images[i]}></img>
                <span className='featurePropName'>{item.name}</span>
                <span className='featurePropCity'>{item.city}</span>
                <span className='featurePropPrice'>Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className='featurePropRating'>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div> 
        ))}
        
        </>}
       
    </div>

  )
}
