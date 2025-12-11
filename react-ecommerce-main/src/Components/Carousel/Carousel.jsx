
import '../Home/home.css'
import Timmer from '../Timmer/Timmer'
import ViewButton from '../ViewButton/ViewButton'
import CarouselAbout from './CarouselAbout/CarouselAbout'
import CarouselHeader from './CarouselHeader/CarouselHeader'
import LeftArrow from '/Images/iconsarrowleft.png'
import RightArrow from '/Images/iconsarrowright.png'
const Carousel = ({timeCount, setTimeCount,newEndTime,viewAll,slider,show,mainText,carouselText,innerText}) => {

    
    const getBox=()=>{
      if(mainText==='Flash Sales'){
        return document.querySelector('.products');
      }
      return document.querySelector('.categories');
    } 
    
    // console.log(elementName)
    const prev=()=>{
       const box=getBox();
       const width= box.clientWidth;
       box.scrollLeft = box.scrollLeft-width;
      }
      const next=()=>{
        const box=getBox('.categories');
        const width= box.clientWidth;
    box.scrollLeft = box.scrollLeft+width;
      }

  
 

 
    return (
    <div>
       <div className="carousel">
          <div className="timmer">
          <div className="todaysales">
           <CarouselHeader carouselText={carouselText}/>
          </div>
           <div className="productsSlider">

            <div className={show ? "slideHeader": "no-timmer-slider"}>

           <CarouselAbout  mainText={mainText}/>
          
         
          <div className="countdown">
          {show? <Timmer
           timeCount={timeCount}
           setTimeCount={setTimeCount}
                  newEndTime={ newEndTime}
                />:''}
          
          </div>
            </div>
           {
             viewAll ?
             (
             <ViewButton innerText={innerText}/>
             ):
             (
              slider? 
              (
                <div className="slider">
           <div className="slider_icon">
           <img src={LeftArrow} alt="" onClick={prev}/>
           </div>
           <div className="slider_icon">
            <img src={RightArrow} alt="" onClick={next} />
            </div>
          </div>
              ):
              (
                ''
              )
             )
           }
          </div>
          </div>
        </div>
    </div>
  )
}

export default Carousel
