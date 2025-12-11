import React from 'react'
import Carousel from '../../Carousel/Carousel'
import Services from '../../Services/Services'

import perfume from '/Images/perfume.png'
import playstation from '/Images/playstation.png'
import speakers from '/Images/speakers.png'
import womenCollection from '/Images/womenscollections.png'


const NewArrival = () => {
  return (
    <div className='newArrival-wrapper'>
      <div className="newArrival-products">
      <Carousel
         mainText={'New Arrival'}
         carouselText={
          'Featured'
         }
         viewAll={false}
          show={false}
         
  />
  <div className="newProducts-list">
   <div className="bg-black-container grid-one">
    <div className="bg-black-text-container">
        <h2>Play Station 5</h2>
        <p>
        Black and White version of the PS5 coming out on sale.
        </p>
        <button>Shop Now</button>
    </div>
   <div className="arrivalImage-container">
        <img src={playstation} alt="" />
    </div>
   </div>
   <div className="bg-black-container grid-two">
   <div className="bg-black-text-container">
   <h2>Women’s Collections</h2>
        <p>
        Featured woman collections that give you another vibe.
        </p>
        <button>Shop Now</button>
   </div>
    <div className="arrivalImage-container">
        <img src={womenCollection} alt="" />
    </div>
    </div>
    <div className="bg-black-container grid-three">
    <div className="bg-black-text-container">
    <h2>Speakers</h2>
        <p>
        Amazon wireless speakers
        </p>
        <button>Shop Now</button>
    </div>
    <div className="arrivalImage-container">
        <img src={speakers} alt="" />
    </div>
    </div>
    <div className="bg-black-container grid-four">
    <div className="bg-black-text-container">
    <h2>Perfume</h2>
        <p>
        GUCCI INTENSE OUD EDP
        </p>
        <button>Shop Now</button>
    </div>
    <div className="arrivalImage-container">
        <img src={perfume} alt="" />
    </div>
    </div>
  </div>
      </div>
      <div className="newArrival-service-details">
     
      <Services
    
      />
      </div>
    
      
    </div>
  )
}

export default NewArrival
