import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
            The meals are fresh, delicious, and perfectly portioned, making every bite a delight. 
            The convenience of having such high-quality food delivered to my doorstep has been a game-changer.
             It saves me 
            so much time without compromising on taste or nutrition. I feel like I have my own personal chef!
            </p>
            </div>
            <div className='testimonial-section-bottom'>
              <img src={ProfilePic} alt="" />
              <p>
              I absolutely love the variety and quality of the meals! 
              Everything is so fresh and flavorful, it feels like a restaurant experience at home. 
              The delivery is always on time,
               and the portions are just right. Its the perfect solution for my busy schedule!
              </p>
              <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
             </div>
             <h2>Harsha</h2>
            </div>
      
    </div>
  )
}

export default Testimonial
