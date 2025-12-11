import axios from 'axios'
import { useEffect, useState } from 'react'
import ImageBanner from '../ImageBanner/ImageBanner'
import Loader from '../Loader/Loader.jsx'
import ViewButton from '../ViewButton/ViewButton.jsx'
import Bestseller from './Bestseller/Bestseller'
import Category from './Category/Category.jsx'
import Explore from './ExploreProducts/Explore'
import HeroImage from './HeroImage/HeroImage.jsx'
import NewArrival from './NewArrival/NewArrival'
import Products from './Products/Products.jsx'

import upArrow from '/Images/uparrow.png'

import './home.css'
import GreaterPng from '/Images/greaterpng.png'


const uRL=`https://ecommerce-website-gra4.onrender.com/api/products/`;

const Home = ({
error,
  setError,login,setLogin,
  loading,setLoading,getUserLogin,
  newEndTime,
  setItemId,
  itemId
  
}) => {
  const [timeCount,setTimeCount]=useState(0);
  const [productData,setProductData] = useState([]);
  
  const getData=async(url)=>{
    setLogin(getUserLogin);
  
    try{
      const res= await axios.get(url);
    const data= await res.data;
    setProductData(data.products);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }

  const scrollTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  useEffect(()=>{
    
    getData(uRL);
   
    },[]);

    if(loading)  return <Loader/>
    if(error) return <div>Error: {error}</div>
  return (
    <div className="home">
       
    
       <div className="heroSection">
       <aside>
       <div className="sideNav">
        <ul>
          <li>Woman{'\''}s Fashion <img src={GreaterPng} alt="" /></li>
          <li>Men{'\''} Fashion <img src={GreaterPng} alt="" /></li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby{'\''} & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        </div>
       </aside>
       <div className="heroImage">
       <div className="horizontal-line-herosection"></div>
       <HeroImage/>
       </div>
       </div>

       <div className="viewProducts">
        <Products 
        productData={productData}
        setTimeCount={setTimeCount}
        newEndTime={'Aug 23, 2024 00:00:00'}
        setItemId={setItemId}
        itemId={itemId}
       />
       </div>
         <div className="productsViewButton">
      <ViewButton innerText="View All Products"/>
      </div>
        <div className="category-vertical-line"></div>

      <div className="productCategory">
        <Category/>
      </div>
      <div className="category-vertical-line"></div>

      <div className="productsBestSeller">
         <Bestseller
          carouselText={'This Month'}
          mainText={'Best Selling Products'}
         viewAll={true}
         slider={false}
         />
         
      </div>

      <div className="banner-wallpaper">
        <ImageBanner  
          timeCount={timeCount}
            
          newEndTime={'Aug 15, 2024 00:00:00'}
          />
      </div>

      <div className='explore-products'>
        <Explore
        uRL={uRL}/>
      </div>
      <div className="productsViewButton">
      <ViewButton innerText="View All Products"/>
      </div>

      <div className="newarrival-products">
        <NewArrival/>
      </div>

     
    <div className="scroll-up" onClick={()=>scrollTop()}>
    <img src={upArrow}/>
    </div>
    </div>
  )
}

export default Home
