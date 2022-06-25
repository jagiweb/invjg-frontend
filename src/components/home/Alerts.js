import React, {useState, useEffect} from "react";
import {Alert} from 'react-bootstrap';

function Alerts(valid, message) {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(null);

    const ifValid = (valid) => {

        if (valid){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }
  return (
    <>
        {console.log(valid)}
        {console.log(message)}

        {/* {valid ? <Alert variant="success"> La compania ha sido creada </Alert> : <Alert variant="danger"> Algo esta mal </Alert>} */}
    </>
    
  )
}

export default Alerts