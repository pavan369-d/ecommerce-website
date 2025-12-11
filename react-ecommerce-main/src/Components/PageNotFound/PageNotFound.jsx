
import { useNavigate } from 'react-router-dom';
import ViewButton from '../ViewButton/ViewButton';
const PageNotFound = () => {
  const navigate = useNavigate();
  function handleNavigation(){
       navigate('/')
  }
  return (
    <div className='pagenotfound'>
     <div className="page-message">
     <h1>404 NOT FOUND</h1>
      <p>Your visited page not found. You may go home page.</p>
      <ViewButton innerText={'Back to home page'} onClick={handleNavigation}/>
     </div>
      
    </div>
  )
}

export default PageNotFound
