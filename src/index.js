import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//components
import Footer from "./components/footer";
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

// Fonksiyonel bileşenler
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Random />
      <Footer />
    </div>
  );
}
const style = { color: "red", fontSize: "32px", textTransform: "uppercase" }; // internal css usage.

function Header() {
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  ); // css usage.
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={13} // bu şekilde bir number yazabiliyoruz,yoksa string oluyor
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
function Random() {
  return <div id="div">red writing </div>;
}
// React 18 ile gelen createRoot API'ı
const root = ReactDOM.createRoot(document.getElementById("root"));

// Uygulamayı render etme
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performans ölçümü için isteğe bağlı
// reportWebVitals(console.log);
