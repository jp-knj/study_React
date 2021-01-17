import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
