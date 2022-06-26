import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes, Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import Login from './components/home/Login';
import Logout from './components/home/Logout';
import { AdminPanel } from './components/admin/AdminPanel';
import Company from './components/admin/company/Company';
import MyCompany from './components/admin/company/MyCompany';
import Supplier from './components/admin/supplier/Supplier';

const App = () => {

  return (

    <Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin-panel/" element={<AdminPanel/>}>
            <Route path="/admin-panel/company" element={<Company/>} /> 
            <Route path="/admin-panel/mycompany/:companyId" element={<MyCompany/>} /> 
            <Route path="/admin-panel/supplier" element={<Supplier/>} />
            {/* <Route path="/admin-panel/table-my-scholars" element={< />} /> */}
            {/* <Route path="/admin-panel/scholars/all-scholars-details" element={< />} /> */}
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
