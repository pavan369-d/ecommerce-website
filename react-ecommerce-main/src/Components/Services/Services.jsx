import React from 'react'
import customercare from '/Images/customerservice.png'
import delivery from '/Images/deliveryicon.png'
import moneyback from '/Images/moneyguarantee.png'
const Services = () => {
    let serviceIcon=[
        {
            id:1,
            name:delivery,
            heading:'FREE AND FAST DELIVERY',
            para:'Free delivery for all orders over $140'
        },
        {
            id:2,
            name:customercare,
            heading:'24/7 CUSTOMER SERVICE',
            para:'Friendly 24/7 customer support'
        },
        {
            id:3,
            name:moneyback,
            heading:'MONEY BACK GUARANTEE',
            para:'We reurn money within 30 days'
        }
    ]
  return (
   
       <div className="newArrival-service-details">
    
     {
       serviceIcon.map((item)=>{
            return(
                <div className="services" key={item.id}>
                <div className="service-icon">
                    <div className="inner-icon">
                        <img src={item.name} alt="" />
                    </div>
                </div>
                <div className="service-type">
                    <h4>{item.heading}</h4>
                    <p>{item.para}</p>
                </div>
                </div>
            )
        })
     }
   </div>
   
  )
}

export default Services
