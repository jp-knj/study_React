import React from 'react';
/* Let's keep the exact same App as above with React.memo, but add one small feature. Let's make it possible to delete a skill when we click on it. To do that, we need to filter the skills array according to the skill we click on. For that, we create the handleRemoveSkill function in App */

function App() {
  const [skill, setSkill] = React.useState('')
  const [skills, setSkills] = React.useState([
    'HTML', 'CSS', 'JavaScript'
  ])

  function handleChangeInput(event) {
    setSkill(event.target.value);
  }

  function handleAddSkill() {
    setSkills(skills.concat(skill))
  }

  function handleRemoveSkill(skill) {
    setSkills(skills.filter(s => s !== skill))
  }

  /* Next, we pass handleRemoveSkill down as a prop, or since this is a function, as a callback function to be used within SkillList */
  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddSkill}>Add Skill</button>
      <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} />
    </>
  );
}

/* When we try typing in the input again, we see rerendering in the console every time we type. Our memoization from React.memo is broken!

What is happening is the handleRemoveSkill callback function is being recreated everytime App is rerendered, causing all children to be rerendered, too. We need to wrap handleRemoveSkill in useCallback and only have it be recreated when the skill value changes.

To fix our app, replace handleRemoveSkill with:

const handleRemoveSkill = React.useCallback((skill) => {
  setSkills(skills.filter(s => s !== skill))
}, [skills])

Try it yourself!
*/
const SkillList = React.memo(({ skills, handleRemoveSkill }) => {
  console.log('rerendering');
  return (
    <ul>
      {skills.map(skill => <li key={skill} onClick={() => handleRemoveSkill(skill)}>{skill}</li>)}
    </ul>
  )
})


export default App
