import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [users, setUsers] = useState([])

  // This useEffect only runs once so get all the existing users
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await axios.get('https://augmentik-backend.vercel.app/api/user')

        // updating the state
        setUsers(data.data);
      }catch(err){
        console.log(err);
      }
    };

    getAllUsers();
  }, [])

  return (
    <div className='sidebar'>
      <div className="side__head">
        Admin
      </div>
      <div className="side__container">
        {
          users && 
          users.map((item) => (
            <Link to={`/admin/${item._id}`} key={item._id} className="side__item">
              <div className="side__left">
                {item.username}
              </div>
              <div className={(item.isAdmin ? "side__admin" : "side__notAdmin")}>
                Admin
              </div>
            </Link>
          ))
        }
      </div>        
    </div>
  )
}

export default Sidebar