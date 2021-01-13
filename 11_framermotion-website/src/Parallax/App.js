import React, { useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <Header
        menuState={menuState}
        setMenuState={setMenuState}/>
      <Home />
    <Footer />
    </>
  );
}
export default App;
