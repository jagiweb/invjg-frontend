import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Falcons from 'react-icons/fa'
import * as Ailcons from 'react-icons/ai'
import styled from 'styled-components'
import SidebarData from './SidebarData';
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib';
import * as Rilcons from 'react-icons/ri'
// import Logout from '../home/Logout';
// import PriceTokens from '../tokens/PriceTokens';
// import NavbarTokens from '../tokens/NavbarTokens';
import './sidebar.css'
import API from '../../../API'

const Nav = styled.div`
  background: rgb(34, 34, 34);
  height: 80px;
  width: auto;
  display: ${({ sidebar }) => (sidebar ? 'none' : 'flex')};
  justify-content: flex-start;
  align-items:center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: rgb(34, 34, 34);
  width: 250px;
  height: 100%;
  display: flex;
  justify-center: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 650ms;
  z-index: 10;

`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = ({tokens}) => {
//   const [tokensPrices, settokensPrices] = useState([])
  const [sidebar, setSidebar] = useState(false)
  let navigate = useNavigate(); 
  const showSidebar = () => setSidebar(!sidebar)


  useEffect(() => {
    let token = localStorage.token
    // API.getTokensPrices(token)      
    //     .then(data => settokensPrices(data.tokens_current_price))
  }, [])


  const logOut = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    return navigate("/")
  }
  
  return (
    <>
    <IconContext.Provider value={{ color:'fafafa'}}>
      <Nav>
        <NavIcon to='#'>
          <Falcons.FaBars  onClick={showSidebar}/>
          
        </NavIcon>
        <ul className='sidebar-home-button'>
          <li ><Link to="/">HOME</Link></li>
          
        </ul>
        
        <span className=''></span>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <Ailcons.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}  />
          })}
          <button type='button' className="logout-button f-right btn btn-logout-navbar" onClick={() => logOut()}><span className='mr-5'>{<Rilcons.RiLogoutBoxRLine />}</span>Logout</button>
          <div className='row pri'>
            {/* {renderTokensPrice()} */}
          </div>
          
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
    </>
  );
};

export default Sidebar;

  