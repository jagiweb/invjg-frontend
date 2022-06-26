import React, {useState, useEffect} from "react";
import API from '../../../API';
import CreateSupplierModal from './CreateSupplierModal'

function Supplier() {
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
      <CreateSupplierModal id={admin}/>
    </div>
  )
}

export default Supplier