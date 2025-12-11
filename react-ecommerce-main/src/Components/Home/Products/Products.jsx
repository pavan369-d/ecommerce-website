import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Carousel from "../../Carousel/Carousel.jsx";
import Rating from "../../Rating/Rating.jsx";

import "../home.css";

import eyePng from "/Images/eyepng.png";
import heartPng from "/Images/heartpng.png";

const Products = ({ setItemId, itemId, newEndTime, setTimeCount }) => {
  const [likedItems, setLikedItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);

  const handleProduct = (newId) => {
    setItemId(newId);
    console.log("Product selected:", newId);
  };

  const handleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = async (productId) => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"));
      

      if (!userId) {
        alert("Please login first!");
        return;
      }

      const res = await axios.post(
        `https://ecommerce-website-gra4.onrender.com/api/users/${userId}/cart/add`,
        { productId }
      );

      console.log("Cart Updated:", res.data);
      alert("Added to cart!");
    } catch (err) {
      console.error("Add to cart error:", err.response?.data || err.message);
      alert("Failed to add to cart.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://ecommerce-website-gra4.onrender.com/api/products/");
        console.log("Backend response:", res.data);

        // FIX AUTO-DETECT:
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.products
          ? res.data.products
          : [];

        setProductData(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Loading Products...</h2>;

  return (
    <div className="product-wrapper">
      <Carousel
        mainText="Flash Sales"
        carouselText="Today's"
        viewAll={false}
        show={true}
        slider={true}
        setTimeCount={setTimeCount}
        newEndTime={newEndTime}
      />

      <div className="products">
        {productData.map((item) => (
          <div key={item._id} className="product">
            <div className="discount-p">-40%</div>

            <div className="imageOuterContainer">
              <div className="productImageContainer">
                <Link to="/productdetailpage">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="productImage"
                    onClick={() => handleProduct(item._id)}
                  />
                </Link>

                <div className="productIcons">
                  <div className="icon_24">
                    <img
                      src={heartPng}
                      alt="heart"
                      className={`heartpng ${
                        likedItems[item._id] ? "liked" : ""
                      }`}
                      onClick={() => handleLike(item._id)}
                    />
                  </div>

                  <div className="icon_24">
                    <img src={eyePng} alt="eye" className="heartpng" />
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => addToCart(item._id)}>Add To Cart</button>

            <div className="productDescription">
              <p className="productDesc">{item.title.slice(0, 20)}...</p>
              <p className="productPricing">
                <span className="productPrice">{`$${item.price}`}</span>
              </p>

              <div className="rating">
                <Rating noOfRating={Math.ceil(item.rating?.rate || 4)} />
                <div className="reviews">
                  <span>{item.rating?.count || 100}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
