import React from 'react'
import heroImg from '../../assets/image 3.jpg'
import '../../styles/Hero.css'

const Hero = () => {
  return (
    <div className='my-3'>
        <img src={heroImg} className='img-fluid w-100 hero-img' alt="hero-image" />
    </div>
    
  )
}

export default Hero