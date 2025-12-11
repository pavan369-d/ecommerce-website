import React from 'react'
import Carousel from '../../Carousel/Carousel'
import '../home.css'
const Category = () => {
    const category=[
        {
            id:1,
            img:'/Images/cellphone.png',
            categoryName:'Phones',
        },
        {
            id:2,
            img:'/Images/computers.png',
            categoryName:'Computers',
        },
        {
            id:3,
            img:'/Images/smartwatch.png',
            categoryName:'SmartWatch',
        },
        {
            id:4,
            img:'/Images/camera.png',
            categoryName:'Camera',
        },
        {
            id:5,
            img:'/Images/headphones.png',
            categoryName:'HeadPhones',
        },
        {
            id:6,
            img:'/Images/gamepad.png',
            categoryName:'Gaming',
        }
        ,
        {
            id:7,
            img:'/Images/sunglasses.webp',
            categoryName:'Sunglasses',
        },
        {
            id:8,
            img:'/Images/womenstop.webp',
            categoryName:'tops',
        },
        {
            id:9,
            img:'/Images/womensbag.webp',
            categoryName:'womens-bags',
        },
        {
            id:10,
            img:'/Images/shoe.webp',
            categoryName:'shoes',
        },
        {
            id:11,
            img:'/Images/dress.webp',
            categoryName:'dresses',
        },
        {
            id:12,
            img:'/Images/shirt1.webp',
            categoryName:'shirts',
        }
    ]
  return (
   
    <div className="cato-wrapper">
          <Carousel
        carouselText={'categories'}
        mainText={'Browse By Category'}
        viewAll={false}
        slider={true}
       elementName="'.categories'"
        />
    <div className="categories">
      {category.map(item=>{
        return(
            <div key={item.id} className="category">
               <div className="bg-img">
               <img src={item.img} alt={item.categoryName} className='shirtpng'/>
               </div>
                <span>{item.categoryName}</span>
            </div>
        )
      })}
    </div>

    </div>

  )
}

export default Category

