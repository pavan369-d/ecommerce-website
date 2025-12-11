import React from 'react'
import bannerStereo from '/Images/bannerstereo.png'
const ImageBanner = ({displayImage,newEndTime,timeCount}) => {
  return (
    <div className='imageBannerContainer'>
      <div className="image-banner-text">
        <h3>categories</h3>
        <h1>Enhance Your Music Experience</h1>
        <div className="banner-timmer">
            <div className="banner-hours banner-timmer-box">

               <div className='banner-timmer-text'>
              {timeCount ? ( <p>{timeCount.hours}</p>):''}
               <p>Hours</p>
               </div>
            </div>
            <div className="banner-days banner-timmer-box">
            <div className='banner-timmer-text'>
            {timeCount ? ( <p>{timeCount.days}</p>):''}
                <p>Days</p>
                </div>
            </div>
            <div className="banner-minutes banner-timmer-box">
            <div className='banner-timmer-text'>
            {timeCount ? ( <p>{timeCount.minutes}</p>):''}
                <p>Minutes</p>
                </div>
            </div>
            <div className="banner-seconds banner-timmer-box">
            <div className='banner-timmer-text'>
            {timeCount ? ( <p>{timeCount.seconds}</p>):''}
                <p>Seconds</p>
                </div>
            </div>
        </div>
        <div className="banner-buy-btn">
            Buy Now!
        </div>
      </div>
      <div className="img-bg-blur">
      </div>
      <div className="banner-image-container">
      <div className="img-banner">
      <img src={bannerStereo}/>
      </div>
      </div>
    </div>
  )
}

export default ImageBanner
