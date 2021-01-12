import React from 'react'
function App() {
  const [developer, setDeveloper] = React.useState({
    language: "",
    yearsExperience: 0
  });

  function handleChangeYearsExperience(event) {
    const years = event.target.value;
    /* We must pass in the previous state object we had with the spread operator to spread out all of its properties */
    setDeveloper({ ...developer, yearsExperience: years });
  }

  return (
    <div>
      {/* No need to get previous state here; we are replacing the entire object */}
      <button
        onClick={() =>
          setDeveloper({
            language: "JavaScript",
            yearsExperience: 0
          })
        }
      >
        Change language to JS
      </button>
      {/* We can also pass a reference to the function */}
      <input
        type="number"
        value={developer.yearsExperience}
        onChange={handleChangeYearsExperience}
      />
      <p>I am now learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years of experience</p>
    </div>
  );
}

export default App;
