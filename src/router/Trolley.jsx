import React, { useState } from "react";
import "../components/Trolley.css";
import pult from '../assets/Pult.png'
import telvizr from '../assets/Telvizr.png'

export default function Checkout() {
  const [form, setForm] = useState({
    firstName: "",
    company: "",
    address: "",
    apt: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const products = [
    { id: 1, name: "LCD Monitor", price: 650, image: telvizr },
    { id: 2, name: "H1 Gamepad", price: 1100, image: pult },
  ];

  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  const shipping = 0;
  const total = subtotal - discount;

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(subtotal * 0.1);
    } else if (coupon === "FREESHIP") {
      alert("Shipping is already free 😉");
    } else {
      alert("Invalid coupon");
      setDiscount(0);
    }
  };

  const placeOrder = () => {
    alert(`Order placed successfully! Total: $${total}`);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Billing Details</h2>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address*"
            value={form.address}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="apt"
            placeholder="Apartment, floor, etc. (optional)"
            value={form.apt}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Town/City*"
            value={form.city}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            value={form.phone}
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={form.email}
            onChange={handleFormChange}
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="saveInfo"
              checked={form.saveInfo}
              onChange={handleFormChange}
            />
            Save this information for faster check-out next time
          </label>
        </form>
      </div>

      <div className="checkout-right">
        {products.map((p) => (
          <div key={p.id} className="checkout-item">
            <img src={p.image} alt={pult} />
            <span>{p.name}</span>
            <span>${p.price}</span>
          </div>
        ))}

        <div className="checkout-summary">
          <div>
            <span>Subtotal:</span> <span>${subtotal}</span>
          </div>
          <div>
            <span>Shipping:</span> <span>Free</span>
          </div>
          <div>
            <strong>Total:</strong> <strong>${total}</strong>
          </div>
        </div>

        <div className="payment-method">
          <label>
            <input
              type="radio"
              value="bank"
              checked={payment === "bank"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Bank
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on delivery
          </label>
        </div>

        <div className="coupon-section">
          <input
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button type="button" onClick={applyCoupon}>
            Apply Coupon
          </button>
        </div>

        <button className="place-order" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
