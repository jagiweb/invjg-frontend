import React, {Fragment, useEffect, useState} from 'react'
import { Routes, Outlet, useNavigate } from 'react-router-dom';
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
        <div className="container">                    
            <div className='row mtop-15 mbo-5'>ADMIN PANEL</div>
            <ul className='text-white'>
                <li>CREATE COMPANY</li>
                <li>MENU UPDATING DEPENDING OF CONTENT FROM USER</li>
                <li>CREATE SUPPLIER</li>
                <li>CREATE ITEM</li>
                <li>CREATE CITY</li>
                <li>CREATE SUPERVISOR</li>
                <li>CREATE INVENTORY</li>
                <li>CREATE SELL</li>
                <li>CREATE SELLER</li>
            </ul>
        </div>
    </Fragment>
  )
}
