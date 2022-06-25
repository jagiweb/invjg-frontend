import React, {useState, useEffect} from "react";
import {Modal, Button, Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import API from '../../../API';
// import { alertService } from '../../services/AlertService';
import Alerts from "../../home/Alerts";

function CreateCompanyModal(admin) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const [company, setComapny] = useState()

    const handleChange = (e) => {
      const {name, value} = e.target
      setComapny(prevState => ({
          ...prevState,
          [name]: value,
          // admin_id: 2
          admin_id: admin.id
      }))         
    } 

    const hSubmit = (e) => {
      e.preventDefault()
      API.createCompany(company)
        .then(data => setComapny(data.success))
      // navigate(`/admin-panel`)
    }

  return (
    <>
    
    <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={hSubmit} >
        <Modal.Body>
            
                <label>Nombre de empresa</label>
                <input name="name" onChange={handleChange} placeholder="Coloca aqui el nombre de empresa" />
                <label>RIF (opcional)</label>
                <input name="rif" onChange={handleChange} placeholder="Escribe aca el RIF de la empresa. Es opcional" />
                <label>Pais</label>
                <input name="country" onChange={handleChange} placeholder="La compania esta creada en que pais?" />
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>Save Changes</Button>         
        </Modal.Footer>
        </form>
        
      </Modal>
      

    </>
  )
}

export default CreateCompanyModal