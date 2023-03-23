import React from 'react'
import './Admin.css'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const Admin = () => {
  return (
    <section className='admin'>
      <Sidebar/>
      <Main/>
    </section>
  )
}

export default Admin