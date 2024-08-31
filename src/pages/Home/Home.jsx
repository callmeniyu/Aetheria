import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Mission from '../../components/Mission/Mission'
import Events from '../../components/Events/Events'
import Blogs from '../../components/Blogs/Blogs'
import Stats from '../../components/Stats/Stats'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Events />
      <Blogs />
      <Stats />
    </div>
  )
}

export default Home