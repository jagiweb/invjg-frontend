import React from 'react'
import * as Falcons from 'react-icons/fa'
import * as Ailcons from 'react-icons/ai'
import * as Iolcons from 'react-icons/io'
import * as Rilcons from 'react-icons/ri'

 const SidebarData = [
    {
        title: 'Admin Panel',
        path: '/admin-panel',
        icon: <Iolcons.IoMdGrid />,
        iconClosed: <Rilcons.RiArrowDownFill />,
        iconOpened: <Rilcons.RiArrowUpSFill />,
        
    },
    {
        title: 'inversiones y servicios jg 2010',
        path: '#',
        icon: <Rilcons.RiListOrdered />,
        iconClosed: <Rilcons.RiArrowDownSFill />,
        iconOpened: <Rilcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Caracas',
                path: "company",
                icon: <Rilcons.RiListCheck />
            },
            {
                title: 'Valencia',
                path: "table-my-scholars",
                icon: <Rilcons.RiDashboardLine />
            },
        ]
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
                title: 'Add Scholars',
                path: "scholars/new-scholar",
                icon: <Ailcons.AiOutlineUserAdd />
            }
        ]
        
    },
    {
        title: 'Axies',
        path: '/',
        icon: <Falcons.FaPiggyBank />,
        iconClosed: <Rilcons.RiArrowDownFill />,
        iconOpened: <Rilcons.RiArrowUpSFill />,
        
    },
    {
        title: 'Calculator',
        path: '/',
        icon: <Rilcons.RiCalculatorLine />,
        iconClosed: <Rilcons.RiArrowDownFill />,
        iconOpened: <Rilcons.RiArrowUpSFill />,
        
    },
    {
        title: 'Energy Counter',
        path: '/',
        icon: <Iolcons.IoIosFlash />,
        iconClosed: <Rilcons.RiArrowDownFill />,
        iconOpened: <Rilcons.RiArrowUpSFill />,
        
    }

]
export default SidebarData