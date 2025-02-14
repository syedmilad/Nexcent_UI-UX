import React from 'react'
import "./Comunity.css"
import { data } from '../../components/constants'
import { Card } from '../../components'

const Comunity = () => {
  return (
    <div className='app__comunity section__padding flex__center'>
        <div className='app__comunity-header'>
            <h1 className='p__cormorant'>Manage your entire community in a single system</h1>
            <p className='p__opensans'>Who is Nextcent suitable for?</p>
        </div>
        <div className='app__comunity-content'>
            {data.memberShip.map((card,index)=> (
                <Card key={index} imageUrl={card.imageUrl} title={card.title} subTitle={card.subTitle} /> 
            ))}
        </div>
    </div>
  )
}

export default Comunity