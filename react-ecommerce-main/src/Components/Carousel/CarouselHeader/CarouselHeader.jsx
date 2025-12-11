import '../../Home/home.css'

import Rectangle from '/Images/Rectangle17.png'
const CarouselHeader = ({carouselText}) => {
  return (
    <div>
       <p className="todays"><img src={Rectangle} alt="" /><span>{carouselText}</span></p>
    </div>
  )
}

export default CarouselHeader
