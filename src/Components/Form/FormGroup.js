import React from "react"
import {Form} from 'react-bootstrap'

function FormGroup (props){
    const {label,type,register} = props   
    //console.log("REGIDTRT:"+label)
    //console.log("REGIDTRT:"+register.nombre)

    return(
        <>
            <Form.Group >
                <Form.Label className="form-group mt-4"><h6>{label}</h6></Form.Label>
                <Form.Control controlId={label} placeholder={label} type={type || "text"} {...register} required />                    
            </Form.Group>
        </>
    )  
}
export default FormGroup