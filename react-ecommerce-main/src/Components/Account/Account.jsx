import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Account = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const getUserData = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/users/${userId}/user`);
      console.log("Fetched User:", res.data);

      setUser({
        name: res.data.name || "",
        email: res.data.email || "",
      });
    } catch (err) {
      console.error("User Fetch Error:", err);
    }
  };

 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      getUserData(storedUser);
    }
  }, []);

  const breadcrumbitems = [
    { label: "Home", path: "/", active: false },
    { label: "My Account", path: "/account", active: true },
  ];

  return (
    <div className="account-container">
      <div className="breadcrumb-float breadcrumb-account">
        <Breadcrumb items={breadcrumbitems} />
      </div>

      <div className="account-settings">
        <h3 className="manage-my-account">Manage My Account</h3>
        <ul className="manage-account">
          <li><h3>My Profile</h3></li>
          <li>Address Book.</li>
          <li>My Payment Options</li>
        </ul>
        <h3 className="my-order-h3">My Orders</h3>
        <ul className="my-order">
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
        <h3 className="my-whishlist">My Wishlist</h3>
      </div>

      <div className="myaccount">
        <h3>Edit Your Profile</h3>

        <form>
          {/* NAME */}
          <div className="field-name">
            <div className="input-field">
              <label>First Name</label><br />
              <input
                type="text"
                value={user.name.split(" ")[0] || ""}
                placeholder="First Name"
                readOnly
              />
            </div>

            <div className="input-field">
              <label>Last Name</label><br />
              <input
                type="text"
                value={user.name.split(" ")[1] || ""}
                placeholder="Last Name"
                readOnly
              />
            </div>
          </div>

          {/* EMAIL + ADDRESS */}
          <div className="field-contact">
            <div className="input-field">
              <label>Email</label><br />
              <input
                type="email"
                value={user.email}
                placeholder="Email"
                readOnly
              />
            </div>

            <div className="input-field">
              <label>Address</label><br />
              <input
                type="text"
                value={user.address}
                placeholder="Your Address"
                readOnly
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="field-password">
            <div className="input-field">
              <label>Password Changes</label><br />
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
            </div>
          </div>
        </form>

        <div className="button-changes">
          <button className="cancel-change">Cancel</button>
          <button className="save-changes">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
