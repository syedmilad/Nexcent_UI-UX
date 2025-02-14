import React from 'react'
import "./MemberCard.css"

const MemberCard = (props) => {
    const {imageUrl,subTitle,number} = props
  return (
    <div className='app__membercard'>
        <div className='app__membercard-image'>
            <img src={imageUrl} alt={subTitle} />
        </div>
        <div className="app__member-details">
            <p className='p__cormorant' style={{fontSize: "1.8rem"}}>{number}</p>
            <p className='p__opensans'>{subTitle}</p>
        </div>
    </div>
  )
}

export default MemberCard