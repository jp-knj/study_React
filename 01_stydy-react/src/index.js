// Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// Define a function
  function getButtonText(){
    return 'Click Me';
  }

// Create a react component
const App = () => {

  // Declare the variable
  // const buttonText = 'Click Me!';

  // Declare the other variable
  const buttonText = { text :'Click Me'};

  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDom.render(
  <App/>,
  document.querySelector('#root')
);