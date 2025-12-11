import React from 'react'
import img1 from '/Images/playstore.png'
import QrCode from '/Images/QrCode.png'
import Vector from '/Images/Vector.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-items">
        <ul className="footer-links">
            <Link to="/"><li className='exclusive-li'>Exclusive <br /><span>subscribe</span></li></Link>
           
            <Link to="/"><li>Get 10% off your first order</li></Link>
            <li>
               <div className="subscribe">
               <input type="text" placeholder='Enter your email' />
               <img src={Vector} alt="send" className='send-btn-footer' />
               
               </div>
            </li>
            
        </ul>
        <ul className="footer-links">
            <li>Support</li>
            <li>111 Bijay sarani,Dhoka,<br />
            DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-888888-9999</li>
        </ul>
        <ul className="footer-links">
            <Link to="/account"><li>Account</li></Link>
            <Link to="/account"><li>My Account</li></Link>
            <Link to="/signin"><li>Login / Register</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
           
        </ul>
        <ul className="footer-links">
            <li>Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
        </ul>
        <ul className="footer-links">
            <li>Download App</li>
            <li>Save $3 with App New User Only</li>
            <li>
                <img src={QrCode} alt="Qr Code"  className="qrcode-img"/>
                <img src={img1} alt="playstore" className="store-img"/>
            </li>
        </ul>
      </div>
      <p className='copyright'>&copy; Copyright Rime 2022. All right reserved</p>
    </footer>
  )
}

export default Footer
