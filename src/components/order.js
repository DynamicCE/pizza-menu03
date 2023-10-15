import React from "react";
export default function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open from {openHour}:00 to {closeHour}:00 come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
