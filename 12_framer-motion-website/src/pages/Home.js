import React from 'react'

import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import Activity from '../components/homePage/Activity'
import People from '../components/homePage/People'
import Marquee from '../components/homePage/Marquee'
import News from '../components/homePage/News'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Activity />
      <People />
      <Marquee />
      <News/>
    </>
  )
}

export default Home;
