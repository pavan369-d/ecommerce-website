import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import eyePng from "/Images/eyepng.png";
import heartPng from "/Images/heartpng.png";
import axios from "axios";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products/");
        setProducts(res.data.products); // res.data must be an array
        setLoading(false);
      }catch (err) {
  console.error("Error fetching products:", err.response?.data || err.message);
        setLoading(false);
}

    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!products || !Array.isArray(products)) {
    return <div>No products found</div>;
  }

  return (
    <div className="viewAllProducts">
      {products.map((item) => (
        <div key={item._id} className="product">

          <div className="imageOuterContainer">
            <div className="productImageContainer">
              <Link to={`/productdetailpage/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="productImage"
                />
              </Link>

              <div className="productIcons">
                <div className="icon_24">
                  <img src={heartPng} alt="heart" className="heartpng" />
                </div>
                <div className="icon_24">
                  <img src={eyePng} alt="eye" className="heartpng" />
                </div>
              </div>
            </div>
          </div>

          <button>Add To Cart</button>

          <div className="productDescription">
            <p className="productDesc">{item.title.slice(0, 16)}..</p>

            <p className="productPricing">
              <span className="productPrice">${item.price}</span>
            </p>

            <div className="rating">
              <Rating noOfRating={Math.ceil(item.rating?.rate || 0)} />
              <div className="reviews">
                <span>{item.rating?.reviews || 0}</span>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ViewProducts;
