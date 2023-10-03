import React from "react";
import questionMark from "../../assets/questionMark.jpg";
import keyLock from "../../assets/keyLock.jpg";
import apple from "../../assets/apple.jpg";
import triangle from "../../assets/triangle.jpg";
import "../../styles/Footer.css";
import faceBook from "../../assets/Group 26.jpg";
import twitter from "../../assets/Group 26 (2).jpg";
import instagram from "../../assets/Group 26 (3).jpg";
import youTube from "../../assets/Group 30.jpg";

const Footer = () => {
  return (
    <section className="container bg-black text-white">
      <main className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={questionMark}
              className="img-fluid question-mark"
              alt="question-mark"
            />
          </div>
          <div className="container">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
        <div>
          <div>
            <img src={keyLock} alt="key-Lock" />
          </div>
          <div>
            <h2>100%</h2>
            <p>Payment Secured</p>
          </div>
        </div>
        <div>
          <div>
            <img src={apple} alt="apple-pic" />
          </div>
          <div>
            <h2>Download on the</h2>
            <h1>APP STORE</h1>
          </div>
        </div>
        <div>
          <div>
            <img src={triangle} alt="triangle-pic" />
          </div>
          <div>
            <h2>Get it on</h2>
            <h1>GOOGLE PLAY</h1>
          </div>
        </div>
      </main>
      <div>
        <h2>Need Help</h2>
        <p>+234 9074666655 or</p>
        <p>help@jazzysburger.com</p>
      </div>
      <div>
        <h1>FOLLOW US</h1>
      </div>
      <div className="d-flex gap-3">
        <img src={faceBook} alt="facebook-pic" />
        <img src={twitter} alt="twitter-pic" />
        <img src={instagram} alt="instagram-pic" />
        <img src={youTube} alt="youTube" />
      </div>
    </section>
  );
};

export default Footer;
