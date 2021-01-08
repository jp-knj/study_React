import React from "react";
import ReactDOM from "react-dom";

import App from "./Parallax/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <main>
      <section style={{ height: "80vh", display: "block" }}>section 1</section>
      <App />
      <section style={{ height: "100vh", display: "block" }}>section3</section>
    </main>
  </React.StrictMode>,
  rootElement
);
