import React from 'react';

/*
  How do you create a state variable?
  Syntax: const [stateVariable] = React.useState(defaultValue);
*/

function App() {

  const [language] = React.useState('JavaScript');

/*
  We use array destructuring to declare state variable.
  Like any variable, we declare we can name it what we like (in this case, 'language').
*/

  return <div>I am learning {language}</div>;
}

export default App;
