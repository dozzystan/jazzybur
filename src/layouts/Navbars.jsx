import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/Burger.svg";
import locationLogo from "../assets/location.svg";
import allProductLogo from "../assets/cap.svg";
import guestLogo from "../assets/person.svg";
import cartLogo from "../assets/bag.svg";
import Cart from "../pages/Cart";

const Navbars = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container position-relative">
      <nav className="container d-flex justify-content-between align-items-cnter">
        <div className="d-flex justify-content-between align-items-center w-25">
          <div>
            <img src={navlogo} className="img-fluid p-3" alt="nav-logo" />
          </div>
          <div>
            <img
              src={locationLogo}
              className="d-none d-md-block"
              alt="location-logo"
            />
          </div>
          <h5 className="d-none d-md-block text-danger">Lagos, Nigeria</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <img
            src={allProductLogo}
            className="img-fluid"
            alt="all-product-logo"
          />
          <h5 className="d-none d-md-block mt-2">All Products</h5>
          <img src={guestLogo} alt="guest-logo" />
          <h5 className="d-none d-md-block mt-s">Hi, Guest</h5>
          <div
            className=""
            onClick={() => (!show ? setShow(true) : setShow(false))}
          >
            <div>
              <img className="" role="button" src={cartLogo} alt="cart-logo" />
            </div>
          </div>
        </div>
        {/* <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/Cart'> Cart </Link></li>
            </ul> */}
      </nav>
      <div className="position-absolute end-0">
        {show && <Cart/>}
      </div>
    </div>
  );
};

export default Navbars;
