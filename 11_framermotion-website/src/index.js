import React from "react";
import ReactDOM from "react-dom";
import App from "./Parallax/App";
import Footer from "./Parallax/components/Footer";
import Hero from "./Parallax/components/Hero";
import Section4 from "./Parallax/components/Section4";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <main>
      <App />
    </main>
  </React.StrictMode>,
  rootElement
);
