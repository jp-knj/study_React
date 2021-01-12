import React, { useState, useRef } from 'react';

function App() {
  const [query, setQuery] = useState("react hooks");
  /* We can pass useRef a default value.
     We don't need it here, so we pass in null to reference an empty object
  */
  const searchInput = useRef(null);

  function handleClearSearch() {
    /*
      .current references the input element upon mount
      useRef can store basically any value in its .current property
    */
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  return (
    <form>
      <input
        type="text"
        onChange={event => setQuery(event.target.value)}
        ref={searchInput}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClearSearch}>
        Clear
      </button>
    </form>
  );
}

export default App;
