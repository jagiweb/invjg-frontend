import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import API from '../../../API';

const SidebarLink = styled(Link)`
    display: flex;
    color: #ele9fc;
    justify-content: space-between;
    align-items: center;
    paddiing: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #33ccff69;
        border-left: 4px solid #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    
`;

const DropdownLink = styled(Link)`
    background: #33ccff2f;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    &:hover {
        background: #33ccff69;
        border-left: 4px solid #fff;
        cursor: pointer;
    }
    
`

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const [adminCompanies, setadminCompanies] = useState([])
    const showSubnav = () => setSubnav(!subnav)

    useEffect(() => {
        let token = localStorage.token
        API.getAdminCompanies(token)      
            .then(data => setadminCompanies(data.companies))
    }, [])

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div className='mar-left10'>
                    {item.icon}
                    <SidebarLabel> {item.title} </SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    
                    <DropdownLink to={item.path} key={index}>
                        {console.log(item)}
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu