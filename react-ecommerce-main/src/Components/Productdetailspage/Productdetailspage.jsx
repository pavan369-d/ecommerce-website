
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Bestseller from '../Home/Bestseller/Bestseller'
import Rating from '../Rating/Rating'
import heart from '/Images/heartpng.png'
import icondelivery from '/Images/icondelivery.png'
import iconreturn from '/Images/Iconreturn.png'
const Productdetailspage = ({itemId}) => {
    const [singleProduct,setSingleProduct]=useState([])
    const [selectedButton, setSelectedButton] = useState('button1');
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    
    let p;
    const getD=async()=>{
        const data= await axios.get(`https://fakestoreapi.com/products/${itemId}`)
        .then(data=>p=data.data)
        .catch(err=>console.log(err))
        console.log(p)
        setSingleProduct(p);
       
    }

    const handleColor=(buttonName)=>{
      setSelectedButton(buttonName)
    }

    
    const [productCount,setProductCount]=useState(1);
    const breadcrumbitems=[
        {label:'Home', path:'/',active:false},
        {abel:'Gaming', path:'/gaming',active:true},
       
        
    ]
  
    useEffect(()=>{
        getD()
      console.log(singleProduct)
    },[])

 
  return (
    <div className='product-detail-wrapper'>
        <div className="breadcrumb-float-productdetail breadcrumb-float">

        <Breadcrumb
        items={breadcrumbitems}
      />
        </div>
      <div className="product-details-container">
        <div className="product-image-view">
            <img src={singleProduct.image} alt="" />
        </div>
        <div className="product-detail-description">
            <h2>{singleProduct.title}</h2>
            
             <div className="product-user-review">
             <div className='product-detail-review'>
           <Rating />
           {/* <span>({singleProduct.rating.count} Reviews)</span> */}
           </div>
           <div className="product-availability">
            <div className="vertical-line-20vh"></div>
            <p>In Stock</p>
           </div>
             </div>
            <p className='product-detail-price'>
           ${singleProduct.price}
            </p>
            <p className="product-detail-desc">
           {singleProduct.description}
           </p>
            <div className="horizontal-line-products"></div>
            <h3 className='.product-color-selec'>
                <div className="flex-24-color">
                <span>Colours: </span>
                 <div className="select-color">
                 <div className='outer-black-inactive'
                 style={{
                    border: selectedButton === 'button1' ? '2px solid black' : '2px solid transparent',
                    cursor: 'pointer',
                    borderRadius:'50%',
                    padding:'2px'
                 }} onClick={()=>handleColor('button1')} ref={button1Ref}>
                        <div className="input-color-green"></div>
                    </div>
                    <div className="outer-black-inactive"
                     onClick={()=>handleColor('button2')} ref={button2Ref}
                     style={{
                        border: selectedButton === 'button2' ? '2px solid black' : '2px solid transparent',
                        cursor: 'pointer',
                        borderRadius:'50%',
                        padding:'2px'
                     }}>
                        <div className="input-color-red"></div>
        
                    </div>
                  
                 </div>
                </div>
            </h3>
            <p className='product-size-selector'><span>Size: </span>
                <span>XS</span>
             <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span></p>
            <div className="product-count">
                <div className="count-btns">
                    <button onClick={()=>setProductCount(productCount>0?productCount-1:0)}>-</button>
                    <span className='count-no'>{productCount}</span>
                    <button onClick={()=>setProductCount(productCount+1)}>+</button>
                </div>
                <div className="buy-btn-product">
                    <button>Buy Now</button>
                    <div className="like-btn">
                        <img src={heart} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-delivery">
                <div className="delivery-type">
                    <Link to="/productdetailpage">
                    <img src={icondelivery} alt="" />
                    </Link>
                    <div className="delivery-info">
                        <h3>Free Delivery</h3>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className="horizontal-line-delivery"></div>
                <div className="delivery-type">
                    <img src={iconreturn} alt="" />
                    <div className="delivery-info">
                        <h3>Return Delivery</h3>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
      
      </div>

     
        <Bestseller
       carouselText={'Related Products'}
       mainText={''}
       viewAll={false}
       slider={false}/>
     
    </div>
  )
}

export default Productdetailspage
