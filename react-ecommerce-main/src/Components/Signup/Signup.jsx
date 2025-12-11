import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GooglePng from "/Images/Icon-Google.png";
import SideImage from "/Images/SideImage.png";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userName: Yup.string().required("Name is Required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Minimum 4 characters")
      .max(12, "Maximum 12 characters")
      .matches(/[!@#$%&(),.?":{}|<>]/, "Must contain a symbol")
      .matches(/[0-9]/, "Must contain a number")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain a lowercase letter"),
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
    } catch (err) {
      const errors = {};
      err.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setFormErrors(errors);
      toast.error("Fix the highlighted errors!", { autoClose: 2000 });
      return;
    }

    try {
      const res = await axios.post("https://ecommerce-website-gra4.onrender.com/api/users/signup", {
        name: formValues.userName,
        email: formValues.email,
        password: formValues.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user._id));

      toast.success("Account created successfully!", { autoClose: 1500 });

      setTimeout(() => {
        navigate("/signin");
      }, 1800);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed!", {
        autoClose: 2000,
      });
        console.log("SIGNUP ERROR:", err.response);

    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <img src={SideImage} alt="sideimage" className="SideImage" />

        <div className="form">
          <header>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="input-fields">
              <div className="field name">
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  value={formValues.userName}
                  onChange={handleChange}
                />
                {formErrors.userName && (
                  <p className="error">{formErrors.userName}</p>
                )}
              </div>

              <div className="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="error">{formErrors.email}</p>
                )}
              </div>

              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                {formErrors.password && (
                  <p className="error">{formErrors.password}</p>
                )}
              </div>
            </div>

            <div className="submit-btns">
              <button className="create-btn">Create Account</button>

              <button className="signup-btn">
                <img src={GooglePng} alt="google" />
                Sign up with Google
              </button>

              <p>
                Already have account?{" "}
                <button
                  className="login-btn"
                  onClick={() => navigate("/signin")}
                >
                  Log in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
