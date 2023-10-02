import React from "react";
import Pizza from "./pizza"; // Pizza bileşenini doğru bir şekilde import ettiğinizden emin olun

// Stilleri tanımlıyoruz
const style = {
  menu: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  pizza: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "300px",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  },
  pizzaImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "1rem",
  },
  pizzaName: {
    margin: "0",
    fontSize: "1.5rem",
  },
  pizzaIngredients: {
    margin: "0",
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "1rem",
  },
  pizzaButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  pizzaButtonHover: {
    backgroundColor: "#d32f2f",
  },
};

export default function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <main>
      <h2>Our menu</h2>
      <div style={style.menu}>
        {pizzaData.map((pizza, index) => (
          <>
            <Pizza pizzaObject={pizza} key={index} />
          </>
        ))}
      </div>
    </main>
  );
}
