import React from "react";
import ReactDOM from "react-dom";
import App from "./Parallax/App";
import Hero from "./Parallax/components/Hero";
import Section4 from "./Parallax/components/Section4";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <main>
      <Hero/>
      <App />
      <Section4 />
    </main>
  </React.StrictMode>,
  rootElement
);
