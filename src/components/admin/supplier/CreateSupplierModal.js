import React, {useState, useEffect} from "react";
import {Modal, Button, Alert, Container, Form} from 'react-bootstrap';
import API from '../../../API';
import Select from 'react-select'

function CreateSupplierModal(admin) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [supplier, setSupplier] = useState()
    const [newSupplier, setNewSupplier] = useState({success:null, message: null})
    const [AlertShow, setAlertShow] = useState(false)
    const [companies, setCompanies] = useState()
    const [company, setCompany] = useState()
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        let token = localStorage.token
        if (companies === undefined) {
            API.getAdminCompanies(token)
            .then(data => setCompanies(data.companies))
        }
      })

    const handleChange = (e) => {
      const {name, value} = e.target
      setSupplier(prevState => ({
          ...prevState,
          [name]: value,
          company_id: company
      }))
               
    } 

    const hSubmit = (e) => {
        e.preventDefault()
        API.createSupplier(supplier)
            .then(data => handleAlert(data))
        
            
        setValidated(true);
    }

    const handleAlert = (data) =>{
        setNewSupplier({success: data.success, message: data.message})
        if (data.success){
            setAlertShow(true)
            setShow(false)
        }
            
    }

    const selectOptions = (data) =>{
        let allCompanies = []
        data.map((company) => {
            allCompanies.push({
                value: company.id,
                label: company.name
            })
        })
        return allCompanies
    }
  return (
    <>
        {console.log(newSupplier)}
        {AlertShow && newSupplier.success ? <Alert onClose={() => setAlertShow(false)} dismissible variant="success">{newSupplier.message}</Alert> : null}
        {AlertShow && newSupplier.success === false ? <Alert onClose={() => setAlertShow(false)} dismissible variant="danger">{newSupplier.message}</Alert> : null}
        {console.log(company)}
        <Button className="nextButton" onClick={handleShow}>
            Crear Proveedor
        </Button>

        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="fade" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Proveedor</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={hSubmit} >
                <Modal.Body>
                    <Container>
                        <Form.Group className="mb-3">
                            <Form.Label>A que empresa tuya pertenece el proveedor? *</Form.Label>
                            {/* <Form.Control autoComplete="off" name="company_id" onChange={handleChange} type="text" placeholder=""/> */}
                            {companies ? <Select 
                                            required
                                            name={"company_id"} 
                                            onChange={value => setCompany(value.value)} 
                                            options={selectOptions(companies)} /> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre de proveedor *</Form.Label>
                            <Form.Control required autoComplete="off"  name="name" onChange={handleChange} type="text"  placeholder="Coloca aqui el nombre de empresa" autoFocus/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control  autoComplete="off" name="address" onChange={handleChange} type="text" placeholder="Direccion del proveedor"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Website</Form.Label>
                            <Form.Control  autoComplete="off" name="website" onChange={handleChange} type="text" placeholder="Pagina web ej: wwww.proveedor.com"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PDF</Form.Label>
                            <Form.Control  autoComplete="off" name="pdf" onChange={handleChange} type="file" placeholder=""/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero de telefono</Form.Label>
                            <Form.Control required autoComplete="off" name="phone" onChange={handleChange} type="number" placeholder="Numero telefonico 555-555-5555"/>
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

export default CreateSupplierModal