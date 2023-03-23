import React from 'react'
import './Island.css'
import Card from './Card'

const Island = () => {
  return (
    <div className='isl'>
        <div className="isl__heading">
            Island Stay
        </div>

        <div className="isl__text">
            One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
        </div>

        <div className="card__gallery">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Island