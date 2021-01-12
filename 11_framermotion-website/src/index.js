import React from "react";
import ReactDOM from "react-dom";
import App from "./Parallax/App";
import Menu from "./Parallax/components/Menu";
import Header from "./Parallax/components/Header"
import Footer from "./Parallax/components/Footer"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </React.StrictMode>,
  rootElement
);
