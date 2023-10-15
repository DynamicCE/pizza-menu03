import React from "react";

export default function Pizza({ pizzaObject }) {
  // Fiyat yazısı için stil tanımlıyoruz
  const priceStyle = {
    fontSize: "1.5rem", // Font boyutunu büyütüyoruz
    marginRight: "1rem", // Sağdan 1rem boşluk bırakıyoruz
  };

  // Resim için stil tanımlıyoruz
  const imgStyle = {
    width: "200px", // Resim genişliğini 200px olarak ayarlıyoruz
    height: "200px", // Resim yüksekliğini 200px olarak ayarlıyoruz
  };
  if (pizzaObject.soldOut) return null;
  return (
    <li className="pizzas">
      {/* Resime stil uyguluyoruz */}
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
            {pizzaObject.price + 3} {/* Fiyat yazısına stil uyguluyoruz */}
          </span>
          <button className="btn">Order</button>
        </div>
      </div>
    </li>
  );
}
