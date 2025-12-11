import React from 'react';
import apple from '/Images/apple.png';
import rightarrow from '/Images/blackrarr.png';
import iphone from '/Images/iphone.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HeroImage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='imageSlider'>
        <div className='bg-black-892'>
        <div className="hero-text">
            <div className="brand-40">
                <img src={apple} alt="" />
                <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% <br /> off Voucher</h1>
            <div className="shop-btn">
                <span className='shop-now-81'>Shop Now</span>
                <span className="right-arrow">
                   <img src={rightarrow} alt="" />
                </span>
            </div>
        </div>
          <img src={iphone} alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-black-892'>
        <div className="hero-text">
            <div className="brand-40">
                <img src={apple} alt="" />
                <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% <br /> off Voucher</h1>
            <div className="shop-btn">
                <span className='shop-now-81'>Shop Now</span>
                <span className="right-arrow">
                   <img src={rightarrow} alt="" />
                </span>
            </div>
        </div>
          <img src={iphone} alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-black-892'>
        <div className="hero-text">
            <div className="brand-40">
                <img src={apple} alt="" />
                <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% <br /> off Voucher</h1>
            <div className="shop-btn">
                <span className='shop-now-81'>Shop Now</span>
                <span className="right-arrow">
                   <img src={rightarrow} alt="" />
                </span>
            </div>
        </div>
          <img src={iphone} alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-black-892'>
        <div className="hero-text">
            <div className="brand-40">
                <img src={apple} alt="" />
                <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% <br /> off Voucher</h1>
            <div className="shop-btn">
                <span className='shop-now-81'>Shop Now</span>
                <span className="right-arrow">
                   <img src={rightarrow} alt="" />
                </span>
            </div>
        </div>
          <img src={iphone} alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-black-892'>
        <div className="hero-text">
            <div className="brand-40">
                <img src={apple} alt="" />
                <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% <br /> off Voucher</h1>
            <div className="shop-btn">
                <span className='shop-now-81'>Shop Now</span>
                <span className="right-arrow">
                   <img src={rightarrow} alt="" />
                </span>
            </div>
        </div>
          <img src={iphone} alt="" />
       </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

