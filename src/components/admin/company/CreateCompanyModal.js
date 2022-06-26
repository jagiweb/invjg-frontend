import React, {useState} from "react";
import {Modal, Button, Alert, Row, Container, Col, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import API from '../../../API';

function CreateCompanyModal(admin) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const navigate = useNavigate()
    const [company, setCompany] = useState({success: null, message: ""})
    const [AlertShow, setAlertShow] = useState(false)

    const handleChange = (e) => {
      const {name, value} = e.target
      setCompany(prevState => ({
          ...prevState,
          [name]: value,
          admin_id: admin.id
      }))         
    } 

    const hSubmit = (e) => {
      e.preventDefault()
      API.createCompany(company)
        .then(data => setCompany({success: data.success, message: data.message}))
    }

    const handleAlert = () =>{

      setAlertShow(true)
      setShow(false)
    }

    

  return (
    <>
    {AlertShow && company.success ? <Alert onClose={() => setAlertShow(false)} dismissible variant="success">{company.message}</Alert> : null}
    {AlertShow && company.success === false ? <Alert onClose={() => setAlertShow(false)} dismissible variant="danger">{company.message}</Alert> : null}

    <Button className="nextButton" onClick={handleShow}>
        Crear Empresa
      </Button>

      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="fade" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Empresa</Modal.Title>
        </Modal.Header>
        <Form onSubmit={hSubmit} >
          <Modal.Body>
              <Container>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nombre de empresa *</Form.Label>
                  <Form.Control autoComplete="off"  name="name" onChange={handleChange} type="text"  placeholder="Coloca aqui el nombre de empresa" autoFocus/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Pais</Form.Label>
                  <Form.Control autoComplete="off" name="country" onChange={handleChange} type="text" placeholder="La compania esta creada en que pais?"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>RIF</Form.Label>
                  <Form.Control autoComplete="off" name="rif" onChange={handleChange} type="text" placeholder="Escribe aca el RIF de la empresa. Es opcional"/>
                </Form.Group>
              </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <div className="d-flex justify-content-center">
              <Button type="submit" className="btn btn-warning" onClick={handleAlert}>Crear Empresa</Button>         
            </div>
          </Modal.Footer>
        </Form>
        
      </Modal>
      

    </>
  )
}

export default CreateCompanyModal