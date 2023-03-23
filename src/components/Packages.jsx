import React from 'react'
import Btn from './Btn'
import Card from './Card'
import './Packages.css'

const Packages = () => {
  return (
    <section className='pack'>
        <div className="pack__container">
            <h1 className="pack__head">
                Best Packaging
            </h1>
            <p className="pack__text">
                This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.
            </p>

            <div className="pack__collection">
                <div className="park__item2">
                    Maldeves
                </div>
                <div className="park__item">
                    Samudram
                </div>
                <div className="park__item">
                    Cordelia
                </div>
                <div className="park__item">
                    Agatti
                </div>
                <div className="park__item">
                    More
                </div>
            </div>

            <div className="park__cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </section>
  )
}

export default Packages