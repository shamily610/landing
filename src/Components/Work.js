import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Explore a variety of delicious options curated to satisfy every craving and preference.",
        },
        {
            image:ChooseMeals,
            title:"Choose How Often",
            text:"Customize your perfect meal plan by selecting dishes that suit your taste and lifestyle.",
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text:" Enjoy fresh, flavorful meals delivered straight to your doorstep, hassle-free and ready to savor.",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-heading '>Work</p>
            <h1 className='primary-heading '>How it works</h1>
            <p className='primary-text'>
            Simply browse our menu and pick your favorite meals, customize them to match your preferences, 
            and place your order. Our chefs prepare each dish with fresh, high-quality ingredients, 
            ensuring a perfect blend of taste and nutrition. Finally, we deliver 
            your meals straight to your doorstep, ready to enjoy—fresh, delicious, and hassle-free!
            </p>
        </div>
            <div className='work-section-bottom'>
                  {workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                           <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                  ))}
            </div>
        </div>
      
    
  )
}

export default Work
