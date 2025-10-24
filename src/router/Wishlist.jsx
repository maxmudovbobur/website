import React, { useEffect, useState } from "react";
import '../components/Wishlist.css';

import googleLogo from "../assets/google-play.png";
import appleLogo from "../assets/app-store.png";
import qrCode from "../assets/qr.png";

function Wishlist() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8));
        setWishlist(data.slice(0, 4));
      })
      .catch(err => console.error("API xatolik:", err));
  }, []);

  const addToCart = (item) => {
    if (!cart.find((c) => c.id === item.id)) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveAllToBag = () => {
    const updatedCart = [...cart];
    wishlist.forEach((item) => {
      const exist = updatedCart.find((c) => c.id === item.id);
      if (exist) {
        exist.qty += 1;
      } else {
        updatedCart.push({ ...item, qty: 1 });
      }
    });
    setCart(updatedCart);
    setWishlist([]);
  };

  return (
    <>
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h2>Wishlist ({wishlist.length})</h2>
          <button onClick={moveAllToBag}>Move All To Bag</button>
        </div>

        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.title} />
              <p className="name">{item.title}</p>
              <p className="price">${item.price}</p>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
              <span
                className="delete"
                onClick={() => removeFromWishlist(item.id)}
              >
                🗑
              </span>
            </div>
          ))}
        </div>

        <div className="recommend-header">
          <h3>Just For You</h3>
          <button>See All</button>
        </div>

        <div className="wishlist-items">
          {products.slice(4, 8).map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.title} />
              <p className="name">{item.title}</p>
              <p className="price">${item.price}</p>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>
          ))}
        </div>

        <div className="cart-header">
          <h2>Cart ({cart.length})</h2>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} />
              <p className="name">{item.title}</p>
              <p className="price">
                ${item.price} × {item.qty} ={" "}
                <b>${(item.price * item.qty).toFixed(2)}</b>
              </p>
            </div>
          ))}
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default Wishlist;
