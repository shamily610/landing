import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
           <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'> 
                Food is an important part of A Balanced Diet
            </h1>
            <p className='primary-text'>
            we are passionate about bringing you the freshest, most flavorful food crafted with care and quality ingredients. Our mission is to create 
            unforgettable dining experiences that delight your taste buds and nourish your soul.
            </p>
            <p className='primary-text'>
            With a perfect blend of tradition and innovation,
             we serve food that brings people together, one meal at a time.
            </p>
            <div className='about-buttons-container'>
               <button className='secondary-button'>
                  Learn more
               </button>
               <button className='watch-video-button'>
                <BsFillPlayCircleFill/>
               </button>
            </div>

        </div>
      
    </div>
  )
}

export default About
