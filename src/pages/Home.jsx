import React from 'react'
import Hero from '../components/home/Hero'
import Main from '../components/home/Main'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div className='container'>
        <Hero/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home