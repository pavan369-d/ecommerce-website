import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import SideImage from "/Images/SideImage.png";
import { toast } from "react-toastify";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });

      // Save data to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user._id));

      toast.success("Login Successful!", { autoClose: 1200 });

      setTimeout(() => {
        navigate("/");
      }, 1400);

    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Invalid email or password",
        { autoClose: 2000 }
      );
    }

    setLoading(false);
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <img src={SideImage} alt="sideimage" className="SideImage" />

        <div className="form">

          <header>
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
          </header>

          <form onSubmit={handleLogin}>
            <div className="field">
              <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                required 
              />
            </div>

            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="submit-btns login-btns">
              <button className="create-btn login-user" disabled={loading}>
                {loading ? "Logging in..." : "Log in"}
              </button>

              <NavLink className="forgotpass">Forgot Password?</NavLink>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
