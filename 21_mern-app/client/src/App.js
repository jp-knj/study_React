import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'

// CSS
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/register' exact component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
