import React from 'react'
import './Card.css'
import Star from '../assets/star.png'
import cardImg from '../assets/cardImg.png'
import Btn from './Btn'

const Card = () => {
  return (
    <div className='card'>
        <div className="card__img">
            <img src={cardImg} alt="" className="card__img" />
        </div>
        <div className="card__data">
            <div className="card__title">
                Kavaratti
            </div>
            <div className="card__desc">
                Kavaratti is the capital of the Union Territory
                of Lakshadweep having ...
            </div>
            <div className="card__ops">
                <div className="card__rating">
                    <img src={Star} alt="" className="card__star" />
                    <span className="card__num">
                        4.5
                    </span>
                    <div className="card__review">
                        {"(1.5k Reviews)"}
                    </div>
                </div>

                <div className="card__btn">
                    <Btn text={"Explore More"} theme={"dark"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card