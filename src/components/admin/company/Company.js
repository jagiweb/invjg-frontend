import React, {useState, useEffect} from "react";
import CreateCompanyModal from './CreateCompanyModal'
import API from '../../../API';

function Company() {

  const [admin, setAdmin] = useState(undefined)
  
  useEffect(() => {
    let token = localStorage.token
    if (admin === undefined) {
        API.validate(token)
        .then(data => setAdmin(data.admin_id))
        
    }
  })

  return (
    <div className="container">
      <CreateCompanyModal id={admin}/>
      <div className="container">                    
            <div className='row mtop-15 mbo-5'>ADMIN PANEL</div>
            <ul className='text-white'>
                <li className="crossed-text">CREATE COMPANY</li>
                <li className="crossed-text">MENU UPDATING DEPENDING OF CONTENT FROM USER</li>
                <li>CREATE SUPPLIER</li>
                <li>CREATE ITEM</li>
                <li>CREATE CITY</li>
                <li>CREATE SUPERVISOR</li>
                <li>CREATE INVENTORY</li>
                <li>CREATE SELL</li>
                <li>CREATE SELLER</li>
            </ul>
        </div>
    </div>
  )
}

export default Company