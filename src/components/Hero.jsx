import React from 'react'
import './Hero.css'
import compass from '../assets/vector.svg'
import mainHero from '../assets/illustration.png'
import map from '../assets/map.png'
import Btn from './Btn'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero__left">
            <div className="hero__visit">
                <span>Visit</span>
                <img src={compass} alt="" className="hero__compass"/>
            </div>

            <div className="hero__text">
              <span>The Exotic</span>
              <br />
              Lakshadweep
              <br />
              <span>Islands</span>
            </div>

            <div className="nav__btn">
              <Btn href={"#"} theme={"dark"} text={"Discover Now"}/>
            </div>
        </div>
        <div className="hero__right">
          <img src={mainHero} alt="" className="hero__mainImg" />
        </div>
    </section>
  )
}

export default Hero