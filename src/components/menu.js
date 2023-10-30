import React from "react";
import Pizza from "./pizza"; // Pizza bileşenini doğru bir şekilde import ettiğinizden emin olun
import "..";
// Stilleri tanımlıyoruz
const style = {};

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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
          <div>
            <p className="main-explanation">Lezzetli pizzalarımız vaaaaar</p>
            <ul className="pizzas">
              {pizzas.map((pizza, index) => (
                <Pizza pizzaObject={pizza} key={index} style={style.pizza} />
              ))}
              {/* map() fonksiyonuna bir başka fonksiyon atadık yani map(()=>{}) yapısı  */}
            </ul>
          </div>
        ) : (
          <p>Sorry, we dont have any pizzas at the moment</p>
        )}
      </main>
    </>
  );
}
