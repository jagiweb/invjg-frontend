import React, {useState, useEffect} from "react";
import API from '../../../API';
import {Alert} from 'react-bootstrap';
import CreateSupplierModal from './CreateSupplierModal'
import Supplier from "./Supplier";

function AllSuppliers() {
    const [admin, setAdmin] = useState(undefined)
    const [allSuppliers, setAllSuppliers] = useState(undefined)
    const [AlertShow, setAlertShow] = useState(false)
    const [suppliersLoaded, setSuppliersLoaded] = useState(null)
    const [suppliersMessage, setSuppliersMessage] = useState()

    useEffect(() => {
        let token = localStorage.token
        if (admin === undefined) {
            API.validate(token)
            .then(data => setAdmin(data.admin_id))
        }

        if (allSuppliers === undefined){
            API.getCompanyAllSuppliers(token)
              .then(data => TotalSuppliers(data.success, data))
        }
      })

    const TotalSuppliers = (success, data) => {
      if (success){
        setAlertShow(true)
        setSuppliersMessage(data.message)
        setAllSuppliers(data.suppliers)
        setSuppliersLoaded(success)
        
      }else{
        setAlertShow(true)
        setSuppliersLoaded(success)
        setSuppliersMessage(data.message)
      }
      
      setTimeout(() => {
        setAlertShow(!success)
      }, 3000)
    }

    const renderAllSuppliers = () =>{
      if (allSuppliers){
        return allSuppliers.map((supplier) => supplier.map((sup, i) => <Supplier supplier={sup} key={i} />))
      }
      
    }

  return (
    <div className="container">
      {AlertShow && suppliersLoaded ? <Alert onClose={() => setAlertShow(false)} dismissible variant="success">{suppliersMessage}</Alert> : null}
      {AlertShow && suppliersLoaded === false ? <Alert onClose={() => setAlertShow(false)} dismissible variant="danger">{suppliersMessage}</Alert> : null}
      <CreateSupplierModal id={admin}/>
      {renderAllSuppliers()}
    </div>
  )
}

export default AllSuppliers