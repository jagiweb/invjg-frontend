import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import API from './API'
import {Route, Routes, Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import Login from './components/home/Login';
import Logout from './components/home/Logout';
import { AdminPanel } from './components/admin/AdminPanel';

const App = () => {

  const [userState, setUserState] = useState()

  // useEffect(() => {
  //     let token = localStorage.token
  //     API.validate(token)
  //       .then(data => setUserState(data.admin))
  // }, [])

  return (
    // <div className="App">
    //   <div>
    //     <form>
    //       <label> Usuario: </label>
    //       <input placeholder="Escribe tu usuario"/>
    //       <br></br>
    //       <label> Contrasena: </label>
    //       <input placeholder="Escribe tu Contrasena"/>
    //     </form>
    //   </div>
    // </div>
    <Fragment>
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin-panel/" element={<AdminPanel/>}>
            {/* <Route path="/admin-panel/profile-scholar/:scholarId" element={<ProfileScholar/>} />  */}
            {/* <Route path="/admin-panel/table-all-scholars" element={<AllScholars />} /> */}
            {/* <Route path="/admin-panel/table-my-scholars" element={<Myscholars />} /> */}
            {/* <Route path="/admin-panel/scholars/all-scholars-details" element={<AllScholarsDetails />} /> */}
            {/* <Route path="/admin-panel/scholars/my-scholars-details" element={<MyScholarsDetails />} /> */}
            {/* <Route path="/admin-panel/scholars/:scholarId" element={<ProfileDetails />} /> */}
            {/* <Route path="/admin-panel/scholars/new-scholar" element={<NewScholarForm />} /> */}
          </Route>
          
          <Route path="/" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route
              path="*"
              element={<Navigate to="/" />}
          />
        </Routes>
      </Fragment>
  );
}

export default App;
