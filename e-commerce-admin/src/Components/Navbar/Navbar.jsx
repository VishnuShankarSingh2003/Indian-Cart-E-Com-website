// import React from 'react';
// import './Navbar.css';
// import navlogo from '../Assets/IndianCartLogo.png';
// import navprofileIcon from '../Assets/nav-profile-new.png';

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className="logo-container">
//         <img src={navlogo} className='nav-logo' alt="Indian Cart Logo" />
//         <p className="logo-text">Indian Cart</p>
//       </div>
//       <img src={navprofileIcon} className='nav-profile' alt="Profile" />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/IndianCartLogo.png";
import navprofileIcon from "../Assets/user.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img src={navlogo} className="nav-logo" alt="Indian Cart Logo" />
          <p className="logo-text">
            <span className="indian-text">Indian </span>
            <span className="cart-text">Cart</span>
          </p>
        </div>
        <h1>Admin Portal</h1>
        <img src={navprofileIcon} className="nav-profile" alt="Profile" />
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
