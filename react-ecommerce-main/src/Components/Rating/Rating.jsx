
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../Home/home.css';
import './styles.css';
const Rating = ({noOfRating=5}) => {

    const [rating,setRating]=useState(0);

    const [hover,setHover]=useState(0);
    
    function handleClick(currentIndex){
        console.log(currentIndex,'clicked');
       setRating(currentIndex)
       
        
        
    }
    
    function handleMouseEnter(currentIndex){
       
        setHover(currentIndex)
    }
    function handleMouseLeave(){
       
      
        setHover(rating);
       
    }

  return (
    <div className="starsContainer">
     {
        [...Array(5)].map((_,index)=>{
            index+=1
            return(
              
                 <FontAwesomeIcon
                  
                  icon={faStar} key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()} 
                className={index<= (rating)?'active':'inactive'}/>
           
            )
            
        })
     }
    </div>
  )
}

export default Rating
