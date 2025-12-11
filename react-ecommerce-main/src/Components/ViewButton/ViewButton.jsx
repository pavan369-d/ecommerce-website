import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productList } from '../../redux/productAction';
import '../Home/home.css';
function ViewButton({innerText}){
  
    
   
    return(
        <Link to='/products'>
        
        <button className="ViewButton">{innerText}</button>
        </Link>
    )
}

export default ViewButton