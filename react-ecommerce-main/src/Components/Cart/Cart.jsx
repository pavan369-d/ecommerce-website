import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

const Cart = () => {
  const [items, setItems] = useState([]);
  const subTotalRef = useRef();
  const totalRef = useRef();
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("user"));
  console.log("User from localStorage:", userId);

  const userProducts = async () => {
    if (!userId) return;

    try {
      const res = await axios.get(
        `https://ecommerce-website-gra4.onrender.com/api/users/${userId}/cart`
      );

      console.log(res.data);

      // RES.DATA.CART IS AN ARRAY
      setItems(res.data.cart);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userProducts();
  }, []);

  const calculateTotals = () => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    subTotalRef.current.innerHTML = totalPrice.toFixed(2);
    totalRef.current.innerHTML = totalPrice.toFixed(2);
  };

  useEffect(() => {
    calculateTotals();
  }, [items]);

 return (
  <div className="cart-container">
    <div className="cart-items">

      {/* Proper Table */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.product._id}>
              <td>{item.product.title}</td>
              <td>${item.product.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="return-to-home">
        <button className="ViewButton" onClick={() => navigate("/")}>
          Return to home
        </button>
      </div>
    </div>

    <div className="cart-total-container">
      <div className="coupon">
        <input type="text" />
        <button className="ViewButton">Apply Coupon</button>
      </div>

      <div className="cart-total">
        <h3>Cart Total</h3>

        <div className="cart-item-prices">
          <span>Subtotal</span>
          <span ref={subTotalRef}>0.00</span>
        </div>

        <div className="cart-item-prices">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="cart-item-prices">
          <span>Total</span>
          <span ref={totalRef}>0.00</span>
        </div>

        <button className="ViewButton">Proceed to checkout</button>
      </div>
    </div>
  </div>
);

};

export default Cart;

