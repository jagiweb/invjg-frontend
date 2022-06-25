import React, {Fragment, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Login from './Login'
import API from '../../API'

function Home() {
    const [userState, setUserState] = useState()
    let navigate = useNavigate(); 

    useEffect(() => {
        let token = localStorage.token

        if (token !== undefined){
            API.validate(token)
            .then(data => setUserState(data.admin))
            console.log(userState)
            navigate("/admin-panel")
        }
    }, [])

    return (
        <div>
            <Fragment>
                {/* <Navbar/> */}
                {/* <Carousel/> */}
                {/* <About/> */}
                <Login/>
                
            </Fragment>
        </div>
    )
}

export default Home