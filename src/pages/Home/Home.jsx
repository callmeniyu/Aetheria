import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home