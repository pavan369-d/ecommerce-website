import React from 'react'

import LeftArrow from '/Images/iconsarrowleft.png'
import RightArrow from '/Images/iconsarrowright.png'
const Slider = () => {
    
  return (
  
                <div className="slider">
           <div className="slider_icon" onClick={()=>swiper.slidePrev()}>
           <img src={LeftArrow} alt=""  onClick={()=>swiper.slidePrev()}/>
           </div>
           <div className="slider_icon"  onClick={()=>swiper.slideNext()}>
            <img src={RightArrow} alt="" onClick={()=>swiper.slideNext()} />
            </div>
          </div>
  
  )
}

export default Slider
