import React from "react";

export default function Pizza(props) {
  // Fiyat yazısı için stil tanımlıyoruz
  const priceStyle = {
    fontSize: "1.5rem", // Font boyutunu büyütüyoruz
    marginRight: "1rem", // Sağdan 1rem boşluk bırakıyoruz
  };

  return (
    <div style={props.style}>
      <img src={props.photoName} alt={props.name} style={props.imgStyle} />
      <div>
        <h3 style={props.nameStyle}>{props.name}</h3>
        <p style={props.ingredientsStyle}>{props.ingredients}</p>
        <div>
          <span style={priceStyle}>{props.price + 3}</span>{" "}
          {/* Fiyat yazısına stil uyguluyoruz */}
          <button style={props.buttonStyle}>Order</button>
        </div>
      </div>
    </div>
  );
}
