import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
