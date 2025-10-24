import React from "react";
import '../components/Contact.css'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import googleLogo from '../assets/google-play.png';
import appleLogo from '../assets/app-store.png';
import qrCode from '../assets/qr.png';

function Contact() {
  return (
    <div className="contact-page">
      <div className="breadcrumb">
        <span>Home</span> / <span className="active">Contact</span>
      </div>

      <div className="contact-container">
        
        <div className="contact-info">
          <div className="info-box">
            <div className="icon red">
              <FaPhoneAlt />
            </div>
            <div className="info-text">
              <h3>Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: <a href="tel:+8801611122222">+8801611122222</a></p>
            </div>
          </div>

          <hr />

          <div className="info-box">
            <div className="icon red">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <h3>Write To Us</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: <a href="mailto:customer@exclusive.com">customer@exclusive.com</a></p>
              <p>Emails: <a href="mailto:support@exclusive.com">support@exclusive.com</a></p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="input-row">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Your Phone *" required />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer>
              <div className="footer-container">
                <div className="footer-col">
                  <h3>Exclusive</h3>
                  <p>Subscribe</p>
                  <span>Get 10% off your first order</span>
                  <div className="subscribe-box">
                    <input type="email" placeholder="Enter your email" />
                    <button>&#10140;</button>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>Support</h4>
                  <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                  <p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
                  <p><a href="tel:+8801588889999">+88015-8888-9999</a></p>
                </div>
                <div className="footer-col">
                  <h4>Account</h4>
                  <ul>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Quick Link</h4>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Download App</h4>
                  <p>Save $3 with App New User Only</p>
                  <div className="app-links">
                    <img src={googleLogo} alt="Google Play" />
                    <img src={appleLogo} alt="App Store" />
                  </div>
                  <div className="qr-section">
                    <img src={qrCode} alt="QR code" />
                  </div>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-240v-80h62l105-120-105-120h-66l-64 344q-8 45-37 70.5T221-120q-45 0-73-24t-28-64q0-32 17-51.5t43-19.5q25 0 42.5 17t17.5 41q0 5-.5 9t-1.5 9q5-1 8.5-5.5T252-221l62-339H200v-80h129l21-114q7-38 37.5-62t72.5-24q44 0 72 26t28 65q0 30-17 49.5T500-680q-25 0-42.5-17T440-739q0-5 .5-9t1.5-9q-6 2-9 6t-5 12l-17 99h189v80h-32l52 59 52-59h-32v-80h200v80h-62L673-440l105 120h62v80H640v-80h32l-52-60-52 60h32v80H400Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m334-80-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l440 280 40 200h-80l-40-80H560v160h-80v-160h-80L334-80Zm66-240h353l-63-40H400q-66 0-113-47t-47-113h80q0 33 23.5 56.5T400-440h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-440Zm346-240q0-78-54-132t-132-54v-54q100 0 170 70t70 170h-54Zm-106 0q0-33-23.5-56.5T640-760v-54q55 0 93.5 39t40.5 95h-54ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240v80H395l-73 80H160v480h640v-440h80v440q0 33-23.5 56.5T800-120H160Zm320-140q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg>
                    <p>in</p>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  );
}

export default Contact;
