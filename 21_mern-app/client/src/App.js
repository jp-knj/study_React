import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Activation from './pages/Activation'

// CSS
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/register' exact component={Register} />
        <Route path='/users/activate/' render={props => <Activation {...props} />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
