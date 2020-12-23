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

  // Declare the other variables
  const buttonText = { text :'Click Me'};
  const style = { backgroundColor: 'blue', color: 'white'};
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" for="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDom.render(
  <App/>,
  document.querySelector('#root')
);