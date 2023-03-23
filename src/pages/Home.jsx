import React from 'react'
import Contact from '../components/Contact'
import Flying from '../components/Flying'
import Hero from '../components/Hero'
import Island from '../components/Island'
import Navbar from '../components/Navbar'
import Packages from '../components/Packages'
import './Home.css'

const Home = () => {
  return (
    <section className='home'>
        <Navbar/>
        <Hero/>
        <Flying/>
        <Packages/>
        <Island/>
        <Contact/>
    </section>
  )
}

export default Home