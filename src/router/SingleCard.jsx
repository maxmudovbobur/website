import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function SingleCard() {
  const { id } = useParams();
  const location = useLocation();
  const card = location.state; // Home'dan kelgan card ma'lumotlari

  if (!card) {
    return <h2>Product topilmadi ❌</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} width="300" />
      <p>ID: {id}</p>
      <p>Price: ${card.price}</p>
    </div>
  );
}
