import React from "react";
import ReactDOM from "react-dom";
import App from "./Parallax/App";
import Hero from "./Parallax/components/Hero";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <main>
      <Hero/>
      <App />
      <section style={{ height: "100vh", display: "block" }}>section3</section>
    </main>
  </React.StrictMode>,
  rootElement
);
