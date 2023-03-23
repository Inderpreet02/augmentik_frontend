import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Main.css'

const Main = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    // This is the function which updates the user values
    const handleChange = async (e) => {
        e.preventDefault();

        // Checks if the values are empty or not
        if(username !== "" && email !== ""){
            try {
                const updatedUser = await axios.put(`http://localhost:8080/api/user/${id}`,
                    {
                        username: username,
                        email: email
                    }
                )

                // updating state
                setUser(updatedUser);

                if(updatedUser){
                    // window reload so that changes can be reflected
                    window.location.reload()
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleDelete = async (e) => {

        e.preventDefault();
        // delete the user        
        try{
            const deletedUser = await axios.delete(`http://localhost:8080/api/user/${id}`)

            if(deletedUser){
                window.location.replace('/admin/create');
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {

        // Getting data for the selected user determined by the current id
        const getUserData = async () => {
            try {
                const user = await axios.get(`http://localhost:8080/api/user/find/${id}`)
                setUser(user.data);
                
            } catch (error) {
                console.log(error);
            }
        }

        getUserData();
        // useEffects only runs when the id changes
    }, [id])

  return (
    <div className='main'>
        <h1 className="main__head">
            Edit User
        </h1>


        <div className="main__container">
            <div className="main__current">
                <h2 className="main__item">Name: {user.username}</h2>
                <h2 className="main__item">Email: {user.email}</h2>
                <h2 className="main__item">Admin: {user.isAdmin === true ? "true" : "false"}</h2>
            </div>
            <form className="main__edit" >
                <input className='main__inp' type="text" value={username} placeholder={"Username"} onChange={e => setUsername(e.target.value)}/>
                <input className='main__inp' type="email" value={email} placeholder={"Email"} onChange={e => setEmail(e.target.value)}/>
                <button className='main__btn' onClick={handleChange} type='submit' >Submit</button>
                <button className='main__btn2' onClick={handleDelete} type='submit' >Delete</button>
            </form>
        </div>
    </div>
  )
}

export default Main