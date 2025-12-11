import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Account from "./Components/Account/Account";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar/Navbar";
import Search from "./Components/Header/Search/Search";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Productdetailspage from "./Components/Productdetailspage/Productdetailspage";
import Signin from "./Components/Signin/Signin";
import Signout from "./Components/Signout/Signout";
import Signup from "./Components/Signup/Signup";
import ViewProducts from "./Components/ViewButton/ViewProducts";
import WishList from "./Components/WishList/WishList";
import {ToastContainer} from "react-toastify"
const App = () => {
  const [account, setAccount] = useState(false);
  const [login, setLogin] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countTimeLeft, setcountTimeLeft] = useState();
  const [itemId, setItemId] = useState();


useEffect(() => {
  const storedLogin = JSON.parse(localStorage.getItem("login"));
  setLogin(storedLogin);
}, [countTimeLeft]);

  return (
    <div className="main-container">
    
      <Header />
      <Navbar login={login} setLogin={setLogin} getUserLogin={login} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              
              error={error}
              setError={setError}
              login={login}
              setLogin={setLogin}
              loading={loading}
              setLoading={setLoading}
              setItemId={setItemId}
              itemId={itemId}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/signup"
          element={<Signup account={account} setAccount={setAccount} />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/productdetailpage"
          element={<Productdetailspage itemId={itemId} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/products" element={<ViewProducts />} />
        <Route path="/signin" element={<Signin login={login} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
