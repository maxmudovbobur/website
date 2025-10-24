import React, { useState } from "react";
import '../components/CartPage.css'

function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Remote Control Toy", price: 120, qty: 1, image: "https://via.placeholder.com/80" },
    { id: 2, name: "Toy Car", price: 80, qty: 2, image: "https://via.placeholder.com/80" },
  ]);

  const updateQty = (id, value) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: value } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, +e.target.value)}
                className="cart-qty"
              />
              <p className="cart-total">${item.price * item.qty}</p>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$10</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${subtotal + 10}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
