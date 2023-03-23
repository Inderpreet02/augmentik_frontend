import React from 'react'
import './Input.css'

const Input = ({ title, place, icon, inp }) => {
  return (
      <div className={inp === "more" ? "inp" : "inp2"}>
        <p className='inp__title'>{title}</p>
        <input className='inp__inp' placeholder={place}/>
        {icon}
      </div>
  )
}

export default Input