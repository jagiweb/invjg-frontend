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
            <h1 className='text-white'>HOLA AMIGOOOOOO</h1>
            <iframe src="https://giphy.com/embed/3o72FiAgLm34QKLSnK" width="480" height="262" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <button onClick={logOut} className='f-right btn btn-danger'>Sign Out</button>
        </>
    )
}

export default Logout