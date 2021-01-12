import React from "react";
import ReactDOM from "react-dom";
import App from "./Parallax/App";
import Header from "./Parallax/components/Header"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <App />
    </main>
  </React.StrictMode>,
  rootElement
);
