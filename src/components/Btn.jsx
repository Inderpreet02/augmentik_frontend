import React from 'react'
import './Btn.css'

const Btn = ({href, text, theme, logo}) => {
  return (
    <a href={href} className={theme === 'light' ? 'btn': 'btn2'}>
        {logo && logo} {text}
    </a>
  )
}

export default Btn