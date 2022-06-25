import React, {useState, useEffect} from "react";
import CreateCompanyModal from './CreateCompanyModal'
// import {Modal, Button} from 'react-bootstrap';
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
    </div>
  )
}

export default Company