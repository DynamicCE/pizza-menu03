import React from "react";
import "../style/style.css"; // CSS dosyasını dahil ediyoruz

export default function Pizza(props) {
  // Fiyat yazısı için stil tanımlıyoruz
  const priceStyle = {
    fontSize: "1.5rem", // Font boyutunu büyütüyoruz
    marginRight: "1rem", // Sağdan 1rem boşluk bırakıyoruz
  };

  return (
    <li>
      <img
        className="backColor"
        src={props.pizzaObject.photoName}
        alt={props.pizzaObject.name}
      />
      <div>
        <h3 className="backColor">{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <div>
          <span style={priceStyle}>{props.pizzaObject.price + 3}</span>{" "}
          {/* Fiyat yazısına stil uyguluyoruz */}
          <button>Order</button>
        </div>
      </div>
    </li>
  );
}
