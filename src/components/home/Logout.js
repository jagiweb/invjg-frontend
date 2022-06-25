import React from 'react'
import {useNavigate} from 'react-router-dom'

function Logout() {
    let navigate = useNavigate(); 
    const logOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        return navigate("/")
      }
    return (
        <>
            <button onClick={logOut} className='f-right btn btn-danger'>Sign Out</button>
        </>
    )
}

export default Logout