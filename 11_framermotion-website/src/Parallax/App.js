import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Activity from "./pages/Activity";
import People from "./pages/People";
import News from "./pages/News";

function App() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Router>
      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <Header
        menuState={menuState}
        setMenuState={setMenuState} />

        <AnimatePresence>
        <Switch >
          <Route
          exact
          path='/'
          render={() => <Home/>}
          />
          <Route
            exact
            path='/activity'
            render={() => <Activity />}
          />
          <Route
            exact
            path='/people'
            render={() => <People />}
          />
          <Route
            exact
            path='/news'
            render={() => <News />}
          />
        </Switch>
        </AnimatePresence>
        <Footer />
    </Router>
    </>
  );
}
export default App;
