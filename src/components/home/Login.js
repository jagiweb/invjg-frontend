import API from '../../API'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import '../../App.css'

const Login = () => {
    
    const [userState, setUserState] = useState()
    const [state, setState] = useState({})
    // const [success, setSuccess] = useState(null)
    let navigate = useNavigate(); 

    const handleChange = (e) => {
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        API.signIn(state)
          .then(json => signIn(json.admin, json.token))
        
    }

    const signIn = (user, token ) => {
        let data = user
        if (user){
          setUserState(data)
          localStorage.token = token
          localStorage.id = user.id
          console.log(userState)
        return navigate("/admin-panel/")
      }else{
        console.log("ERROR")
        // return navigate("/admin-panel")
      }  
    }
           
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-signin">
                                <form onSubmit={handleSubmit} className="box">
                                    <h1>Iniciar sesión</h1>
                                    <p className="text-success"> Por favor ingresa la clave y contrasena!</p> 
                                    <input type="text" onChange={(e) => handleChange(e)} name="username" placeholder="Usuario"/> 
                                    <input type="password" onChange={(e) => handleChange(e)} name="password" placeholder="Contrasena"/> 
                                    {/* <a className="forgot text-danger" href="#">Olvidaste tu contrasena? BRUTO</a>  */}
                                    <input type="submit" name="" value="Continuar" href="#"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Login