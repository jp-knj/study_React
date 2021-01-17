import React from 'react'

// Component of SmoothScroll
import SmoothScroll from '../components/SmoothScroll'

// Component of HomePage
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import Activity from '../components/homePage/Activity'
import People from '../components/homePage/People'
import News from '../components/homePage/News'


const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Hero />
        <About />
        <Activity />
        <People />
        <News />
      </SmoothScroll>
    </>
  )
}

export default Home;
