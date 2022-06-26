import React, {Fragment, useEffect, useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import API from '../../API'
import Sidebar from './navbar/Sidebar';

export const AdminPanel = () => {
    const [userState, setUserState] = useState()
    let navigate = useNavigate(); 

    useEffect(() => {
        let token = localStorage.token

        if (token !== undefined){
            API.validate(token)
            .then(data => setUserState(data.admin))
        }else{
            navigate("/")
        }
    }, [])
  return (
    <Fragment>
        <Sidebar />
        <Outlet />
        
    </Fragment>
  )
}
