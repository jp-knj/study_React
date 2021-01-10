import * as React from 'react'
import { Reset } from 'styled-reset'
import Hero from './components/hero'
import { Parallax } from 'react-spring'

const App = () => (
  <React.Fragment>
    <Reset />
    <Hero/>
  </React.Fragment>
)

export default App;
