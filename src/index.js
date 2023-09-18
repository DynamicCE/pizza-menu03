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
    <div>
      <Header />
      <Menu />
      <Random />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}

// function Footer() {
//   const hour = new Date().getHours(); // getHours renders a number between 0 - 23
//   const openHour = 12;
//   const closeHour = 2;

//   let isOpen;

//   if (openHour < closeHour) {
//     // Normal durum: Açılış ve kapanış saatleri aynı gün içinde
//     isOpen = hour >= openHour && hour < closeHour;
//     /* eğer açılış saati, kapanış saatinden küçükse yani mesela 12 de açılıp 23'de kapatıyorsak,
//     saatimizin açılış saatinden büyük ya da eşit olması veya saatimizin kapanış saatinden önce olması Restoranın açık olduğunu gösterir
//     */
//   } else {
//     // Gece yarısını geçen durum: Açılış ve kapanış saatleri farklı günlerde
//     // eğer kapanış saati daha küçükse mesela 12 de açıp 2 de kapatıyorsak; saatimizin açılış saatinden yine büyük olması veya
//     // kapanış saatinden küçük olması lazım ki restoran açık olabilsin.
//     isOpen = hour >= openHour || hour < closeHour;
//   }

//   if (isOpen) {
//     alert("we are currently open! :)");
//   } else {
//     alert("Sorry, we are closed :(");
//   }
//   return (
//     <footer>{new Date().toLocaleTimeString()} We are currently open!</footer>
//   );
// }

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
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
