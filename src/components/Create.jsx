import axios from 'axios'
import React, { useState } from 'react'
import './Create.css'
const Create = () => {
    
    const [isAdmin, setIsAdmin] = useState("false")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onOptionChange = (e) => {
        setIsAdmin(e.target.value);
    }

    const handleCreate = async (e) => {
        e.preventDefault();

        // Checks if the values are empty or not
        if(username !== "" && email !== "", password !== ""){
            try {
                const newUser = await axios.post(`http://localhost:8080/api/auth/register`,
                    {
                        username: username,
                        email: email,
                        password: password,
                        isAdmin: (isAdmin === "true") ? true : false
                    }
                )

                if(newUser){
                    window.location.replace(`/admin/${newUser.data._id}`)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
    <div className='add'>
        <div className="add__title">
            Add User
        </div>

        <form className="add__form">
            <input type="text" className="add__input" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="email" className="add__input" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="add__input" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
            <div className="add__radio">
                <input
                    type="radio"
                    name="role"
                    value="true"
                    id="admin"
                    checked={isAdmin === "true"}
                    onChange={onOptionChange}
                />
                <label htmlFor="admin">Admin</label>

                <input
                    type="radio"
                    name="role"
                    value="false"
                    id="notAdmin"
                    checked={isAdmin === "false"}
                    onChange={onOptionChange}
                />
                <label htmlFor="notAdmin">User</label>
            </div>

            <button type='submit' onClick={handleCreate} className='add__btn'>Create</button>
        </form>
    </div>
  )
}

export default Create