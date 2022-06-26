import React, {useState, useEffect} from "react";
import * as Falcons from 'react-icons/fa'
import * as Ailcons from 'react-icons/ai'
import * as Iolcons from 'react-icons/io'
import * as Rilcons from 'react-icons/ri'
import API from '../../../API';
import SubMenu from "./SubMenu";


function SidebarData() {
    const [adminCompanies, setadminCompanies] = useState([])
    const [userState, setUserState] = useState([])

    useEffect(() => {
        let token = localStorage.token
        API.getAdminCompanies(token)      
            .then(data => setadminCompanies(data.companies))

        API.validate(token)
            .then(data => setUserState(data.admin))
    }, [])

    const data =  [
        {
            title: 'Admin Panel',
            path: '/admin-panel',
            icon: <Iolcons.IoMdGrid />,
            iconClosed: <Rilcons.RiArrowDownFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            
        },
        {
            title: 'Empresas',
            path: '#',
            icon: <Rilcons.RiListOrdered />,
            iconClosed: <Rilcons.RiArrowDownSFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            subNav: adminCompanies.map((company) => 
                ({
                    title: company.name, 
                    path: `/admin-panel/mycompany/${company.id}`,
                    icon: <Falcons.FaAngleRight />
                })
            )
        },
        {
            title: 'Crear Usuario',
            path: '#',
            icon: <Iolcons.IoMdPerson />,
            iconClosed: <Rilcons.RiArrowDownSFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Crear Supervisor',
                    path: "scholars/all-scholars-details",
                    icon: <Iolcons.IoIosPeople />
                },
                {
                    title: 'Crear Vendedor',
                    path: "scholars/my-scholars-details",
                    icon: <Ailcons.AiOutlineUsergroupDelete />
                },
                {
                    title: 'Crear Administrador',
                    path: "scholars/new-scholar",
                    icon: <Ailcons.AiOutlineUserAdd />
                }
            ]
            
        },
        {
            title: 'Crear Empresa',
            path: 'company',
            icon: <Falcons.FaPiggyBank />,
            iconClosed: <Rilcons.RiArrowDownFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            
        },
        {
            title: 'Registrar Venta',
            path: '/',
            icon: <Rilcons.RiCalculatorLine />,
            iconClosed: <Rilcons.RiArrowDownFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            
        },
        {
            title: 'Registrar inventario',
            path: '/',
            icon: <Iolcons.IoIosFlash />,
            iconClosed: <Rilcons.RiArrowDownFill />,
            iconOpened: <Rilcons.RiArrowUpSFill />,
            
        }
    
    ]

    const renderSubMenu = () => {
        data.map((item, index) => {
            console.log(item)
            return <SubMenu item={item} key={index}  />
        })
    }

  return (
    <>
        {data.map((item, index) => {
            console.log(item)
            return <SubMenu item={item} key={index}  />
        })}
        {/* {console.log(data)} */}
    
    </>
  )
}
 
export default SidebarData