// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Services from '../Services/Services';






import '../../index.css';
import aboutSideImage from '/Images/aboutsideimage.png';
import sallerActive from '/Images/icon_shop.png';
import iconSales from '/Images/iconsale.png';
import customerSite from '/Images/iconshopping.png';
import instaIccon from '/Images/instaicon.png';
import linkedInICon from '/Images/linkedinicon.png';
import willSmith from '/Images/menseller.png';
import moneybg from '/Images/moneybg.png';
import tomCruise from '/Images/tomcruise.png';
import twitterIcon from '/Images/twittericon.png';
import emmaWatson from '/Images/womanseller.png';

const About = () => {

const breadcrumbItems=[
  {label:'Home', path:'/', active:false},
  {label:'About', path:'/about', active:true}
]

  return (
    <div className="aboutPage ">
     <div className="breadcrumb-float bread-crumb-about">
     <Breadcrumb
      items={breadcrumbItems}/>
     </div>
      <div className="about-story">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="about-img">
          <img src={aboutSideImage}/>
        </div>
      </div>
      <div className=" newArrival-service-details" >
      <div className="services">
                <div className="service-icon">
                    <div className="inner-icon">
                        <img src={sallerActive} alt="" />
                    </div>
                </div>
                <div className="service-type">
                    <h4>10.5k</h4>
                    <p>Sallers active our site</p>
                </div>
                </div>
      <div className="services bg-red-services">
                <div className="service-icon ">
                    <div className="inner-icon red-bg">
                        <img src={iconSales} alt="" />
                    </div>
                </div>
                <div className="service-type white-text">
                    <h4>10.5k</h4>
                    <p>Monthly Product Sale</p>
                </div>
                </div>
                <div className="services">
                <div className="service-icon">
                    <div className="inner-icon ">
                        <img src={customerSite} alt="" />
                    </div>
                </div>
                <div className="service-type">
                    <h4>45.5k</h4>
                    <p>Customer active in our site</p>
                </div>
                </div>
                <div className="services">
                <div className="service-icon">
                    <div className="inner-icon">
                        <img src={moneybg} alt="" />
                    </div>
                </div>
                <div className="service-type">
                    <h4>25k</h4>
                    <p>Anual gross sale in our site</p>
                </div>
                </div>

      </div>
      <div className="about-contributors">
     
      <Author/>
       
      </div>
      <div className="about-services">
        <Services/>
      </div>
    </div>
  )
}

export default About

const Author = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperabout about"
        centeredSlides={true} // Add this to center the slides
      >
        <SwiperSlide>
          <div className="contributors-details">
            <div className="contributor-img">
              <img src={tomCruise} alt='' />
            </div>
            <div className="contributors-text">
              <h3>Tom Cruise</h3>
              <p>Founder & Chairman</p>
              <div className="contributors-social-links">
                <img src={twitterIcon} alt="" />
                <img src={instaIccon} alt="" />
                <img src={linkedInICon} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contributors-details">
            <div className="contributor-img">
              <img src={emmaWatson} alt='' />
            </div>
            <div className="contributors-text">
              <h3>Emma Watson</h3>
              <p>Managing Director</p>
              <div className="contributors-social-links">
                <img src={twitterIcon} alt="" />
                <img src={instaIccon} alt="" />
                <img src={linkedInICon} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contributors-details">
            <div className="contributor-img">
              <img src={willSmith} alt='' />
            </div>
            <div className="contributors-text">
              <h3>Will Smith</h3>
              <p>Product Designer</p>
              <div className="contributors-social-links">
                <img src={twitterIcon} alt="" />
                <img src={instaIccon} alt="" />
                <img src={linkedInICon} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contributors-details">
            <div className="contributor-img">
              <img src={tomCruise} alt='' />
            </div>
            <div className="contributors-text">
              <h3>Tom Cruise</h3>
              <p>Founder & Chairman</p>
              <div className="contributors-social-links">
                <img src={twitterIcon} alt="" />
                <img src={instaIccon} alt="" />
                <img src={linkedInICon} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contributors-details">
            <div className="contributor-img">
              <img src={emmaWatson} alt='' />
            </div>
            <div className="contributors-text">
              <h3>Emma Watson</h3>
              <p>Managing Director</p>
              <div className="contributors-social-links">
                <img src={twitterIcon} alt="" />
                <img src={instaIccon} alt="" />
                <img src={linkedInICon} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  )
}
