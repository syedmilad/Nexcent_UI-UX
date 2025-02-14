import React from 'react'
import images from '../../components/constants/images'

const Slider = () => {
  return (
    <div className='app__slider app__wrapper section__padding' style={{backgroundColor:"#F5F7FA"}}>
      <div className='app__wrapper__info'>
        <h1 className='headtext__cormorant' style={{color: "#4D4D4D"}}>Lessons and insights</h1>
        <h1 className='headtext__cormorant' >from 8 years</h1>
        <p className='p__opensans'>Where to grow your business as a photographer: site or social media?</p>
        <button className='custom__button' style={{marginTop: "2rem"}}>Register</button>
      </div>
      <div className='app__wrapper__img'>
        <img src={images.illustration} alt="illustration" />
      </div>
    </div>
  )
}

export default Slider