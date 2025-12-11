
import { bestselling } from '../../bestselling.js'
import Carousel from '../../Carousel/Carousel.jsx'
import Rating from '../../Rating/Rating.jsx'
import '../home.css'
import eyePng from '/Images/eyepng.png'
import heartPng from '/Images/heartpng.png'
const Bestseller = ({mainText,carouselText,viewAll,slider}) => {
  return (
    <div className="bestseller-wrapper">
       <Carousel
         carouselText={carouselText}
         mainText={mainText}
         viewAll={viewAll}
         slide={false}
         innerText={'View All'}
         />   
    
    <div className='products bestselling' >

       {
        bestselling.map((item)=>{
         return(
          <div key={item.id} className="productBestSeller">
          <div className="imageOuterContainer">
          <div className="productImageBestSeller">
          <span className="bestSellerDiscount">{item.discount}</span>
          <img src={item.image} alt={item.title}  className="bestProductImage"/>
          <div className="productIcons">
          <div className="icon_24">
          <img src={heartPng} alt="heart" className="heartpng" />
          </div>
          <div className="icon_24">
          <img src={eyePng} alt="eye" className="heartpng" />
          </div>
          </div>
          </div>
          </div>
          <button className="addToCart">Add To Cart</button>
          <div className="productDescription">
            <p className="productDesc">{item.title}</p>
            <p className="productPricing"><span className="productPrice">{item.price}</span><span className="productOriginalPrice">{item.originalPrice}</span></p>
          </div>
          <div className="rating">
          <Rating noOfRating={item.rating} />
          <div className="reviews">
            <span>({item.reviews})</span>
          </div>

          </div>

        </div>
         )
        })
       }
    </div>
    </div>
  )
}

export default Bestseller
