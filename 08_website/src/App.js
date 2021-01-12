import React from 'react';

function App() {
  /*
   The setter function is always the second destructured value.
   The naming convention for the setter function is to be prefixed with 'set'.
  */
  const [language, setLanguage] = React.useState("javascript");

  return (
    <div>
      <button onClick={() => setLanguage("python")}>
        Learn Python
      </button>
      {/*
        Why use an inline arrow function here instead of immediately calling it like so: onClick={setterFn()}?
        If so, setLanguage would be called immediately and not when the button was clicked by the user.
        */}
      <p>I am now learning {language}</p>
    </div>
  );
}

export default App;

/*
 Note: whenever the setter function is called, the state updates,
 and the App component re-renders to display the new state.
 Whenever state is updated, the component will be re-rendered
*/
