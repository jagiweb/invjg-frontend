import React, {useState, useEffect} from "react";
import {Modal, Button, Alert, Container, Form} from 'react-bootstrap';
import API from '../../../API';
import Select from 'react-select'

function CreateSupplierModal(admin) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [supplier, setSupplier] = useState()
    const [AlertShow, setAlertShow] = useState(false)
    const [companies, setCompanies] = useState()
    const [company, setCompany] = useState()

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
      console.log(supplier)         
    } 

    const hSubmit = (e) => {
        e.preventDefault()
        API.createSupplier(supplier)
            .then(data => setSupplier({success: data.success, message: data.message}))
    }

    const handleAlert = () =>{

      setAlertShow(true)
      setShow(false)
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
        {AlertShow && supplier.success ? <Alert onClose={() => setAlertShow(false)} dismissible variant="success">{supplier.message}</Alert> : null}
        {AlertShow && supplier.success === false ? <Alert onClose={() => setAlertShow(false)} dismissible variant="danger">{supplier.message}</Alert> : null}
        {console.log(companies)}
        <Button className="nextButton" onClick={handleShow}>
            Crear Proveedor
        </Button>

        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="fade" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Proveedor</Modal.Title>
            </Modal.Header>
            <Form onSubmit={hSubmit} >
                <Modal.Body>
                    <Container>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre de proveedor *</Form.Label>
                            <Form.Control autoComplete="off"  name="name" onChange={handleChange} type="text"  placeholder="Coloca aqui el nombre de empresa" autoFocus/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control autoComplete="off" name="address" onChange={handleChange} type="text" placeholder="Direccion del proveedor"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Website</Form.Label>
                            <Form.Control autoComplete="off" name="website" onChange={handleChange} type="text" placeholder="Pagina web ej: wwww.proveedor.com"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>PDF</Form.Label>
                            <Form.Control autoComplete="off" name="pdf" onChange={handleChange} type="file" placeholder=""/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero de telefono</Form.Label>
                            <Form.Control autoComplete="off" name="phone" onChange={handleChange} type="number" placeholder="Numero telefonico 555-555-5555"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>A que empresa tuya pertenece el proveedor?</Form.Label>
                            {/* <Form.Control autoComplete="off" name="company_id" onChange={handleChange} type="text" placeholder=""/> */}
                            {companies ? <Select 
                                            name={"company_id"} 
                                            onChange={value => setCompany(value.value)} 
                                            options={selectOptions(companies)} /> : null}
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