import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import carticon from "/Images/Cart1.png";
import cancel from "/Images/iconcancel.png";
import logoutIcon from "/Images/iconlogout.png";
import reviews from "/Images/Iconreviews.png";
import userIcon from "/Images/iconuser.png";
import myOrder from "/Images/myorder.png";
import searchicon from "/Images/search.png";
import userWhite from "/Images/usericonwhite.png";
import wishlist from "/Images/Wishlist.png";



import "./navbar.css";

const Navbar = () => {
  const [userClicked, setUserClicked] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // FULL USER OBJECT

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setCartCount(0); // reset UI immediately

    setUserClicked(false);
    navigate("/signin");
  };

  const handleAccount = () => {
    setUserClicked(!userClicked);
  };

const userProducts = useCallback(async () => {
  try {
    if (!user) {
      setCartCount(0);
      return;
    }

    const res = await axios.get(
      `http://localhost:3000/api/users/${user}/cart`
    );

    const cartArr = res.data.cart || [];
    console.log("cart arr", cartArr);

    const count = cartArr.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
    console.log(count);

  } catch (err) {
    console.error("Cart Fetch Error:", err);
    setCartCount(0);
  }
}, [user]);  

  const fetchSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/products/search?query=${query}`
      );
      setResults(res.data); // Array of products
    } catch (err) {
      console.error("Search Error:", err);
    }
  };

  useEffect(() => {
    userProducts();
  }, [userProducts]);



 


  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.length > 0) {
        fetchSearch();
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    userProducts();
    if (!token) {
      navigate("/signin");
      return;
    }
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav">
        {/* LEFT */}
        <div className="nav-left">
          <p className="exclusive-feature">Exclusive</p>

          <div className="left-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {!user && <NavLink to="/signup">Sign Up</NavLink>}
            {!user && <NavLink to="/signin">Sign In</NavLink>}
          </div>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          {/* SEARCH INPUT */}
          <div className="search">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* SEARCH RESULTS */}
            {results.length > 0 && (
              <div className="search-result">
                {results.map((item, index) => (
                  <Link to="products" key={index}>
                    {" "}
                    <li key={index}>{item.title}</li>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {user ? (
            <ul className="right-links">
              {/* SEARCH ICON */}
              <li className="right-i">
                <img src={searchicon} className="searchicon" />
              </li>

              {/* CART */}
              <li className="right-i">
                <Link to="/cart">
                  <img src={carticon} className="right-icon" />
                  <span className="cart-count-container">
                    <span className="cart-count">{cartCount}</span>
                  </span>
                </Link>
              </li>

              {/* USER */}
              <li className="right-i">
                <img
                  src={userClicked ? userWhite : userIcon}
                  onClick={handleAccount}
                  className={
                    userClicked ? "account-link" : "account-link-notactive"
                  }
                />
              </li>

              {/* DROPDOWN */}
              <ul
                className={userClicked ? "account-dropdown" : "acount-dontdrop"}
              >
                <div className="inner-link">
                  <li className="dropdown-list">
                    <Link to="/account">
                      <img src={userClicked ? userWhite : userIcon} />
                    </Link>
                    <p>Manage My Account</p>
                  </li>

                  <li className="dropdown-list">
                    <img src={myOrder} />
                    <p>My Orders</p>
                  </li>

                  <li className="dropdown-list">
                    <img src={cancel} />
                    <p>My Cancellations</p>
                  </li>

                  <li className="dropdown-list">
                    <img src={reviews} />
                    <p>My Reviews</p>
                  </li>

                  <li className="dropdown-list" onClick={handleLogout}>
                    <img src={logoutIcon} />
                    <p>Logout</p>
                  </li>
                </div>
              </ul>
            </ul>
          ) : (
            <div className="right-links">
              <img src={searchicon} className="searchicon" />
              <img src={wishlist} className="right-icon" />
              <Link to="/cart">
                <img src={carticon} className="right-icon" />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="verctical-line"></div>
    </nav>
  );
};

export default Navbar;
