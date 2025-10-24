import React, { useEffect, useState } from "react";
import '../components/ProductDetails.css'

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    alert(
      `Added to cart: 
      Product=${product.title}, 
      Price=$${product.price}, 
      Color=${selectedColor}, 
      Size=${selectedSize}, 
      Quantity=${quantity}`
    );
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-info">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="desc">{product.description}</p>

            <div className="options">
              <h4>Choose Color:</h4>
              <div className="colors">
                <span
                  className={selectedColor === "red" ? "color active" : "color"}
                  style={{ background: "red" }}
                  onClick={() => setSelectedColor("red")}
                ></span>
                <span
                  className={selectedColor === "blue" ? "color active" : "color"}
                  style={{ background: "blue" }}
                  onClick={() => setSelectedColor("blue")}
                ></span>
                <span
                  className={
                    selectedColor === "green" ? "color active" : "color"
                  }
                  style={{ background: "green" }}
                  onClick={() => setSelectedColor("green")}
                ></span>
              </div>
            </div>

            <div className="options">
              <h4>Choose Size:</h4>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
            </div>

            <div className="options">
              <h4>Quantity:</h4>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <button className="buy-btn" onClick={() => handleAddToCart(product)}>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
