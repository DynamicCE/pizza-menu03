import React from "react";

export default function Pizza({ pizzaObject }) {

  const priceStyle = {
    fontSize: "1.5rem", 
    marginRight: "1rem",
  };


  const imgStyle = {
    width: "200px",
    height: "200px",
  };
  if (pizzaObject.soldOut) return null;
  return (
    <li className="pizzas">
     
      <img
        src={pizzaObject.photoName}
        alt={pizzaObject.name}
        style={imgStyle}
      />
      <div className="pizza">
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <div>
          <span style={priceStyle}>
            {pizzaObject.price + 3} 
          </span>
          <button className="btn">Order</button>
        </div>
      </div>
    </li>
  );
}
