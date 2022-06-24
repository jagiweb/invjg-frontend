import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

function CreateCompanyModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <label>Nombre de empresa</label>
                <input placeholder="Coloca aqui el nombre de empresa" />
                <label>RIF (opcional)</label>
                <input placeholder="Escribe aca el RIF de la empresa. Es opcional" />
                <label>Pais</label>
                <input placeholder="La compania esta creada en que pais?" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateCompanyModal