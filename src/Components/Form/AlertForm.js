import React from "react"
import { Alert, Button } from "react-bootstrap";

function AlertForm (props){
    //const {show, colorAlert, errorAlert} = props   
    const {show} = props   
    //console.log("REGIDTRT:"+label)
    //console.log("REGIDTRT:"+register.nombre)

    return(
        <Alert className="mt-2 mr-2" show={props.show} variant={props.colorAlert}>
            <Alert.Heading>Mensaje de Password</Alert.Heading>
            <h6>
            {props.errorAlert}
            </h6>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => show={show}} variant={props.colorAlert}>
                    Cerrar
                </Button>
            </div>
        </Alert> 
    )  
}
export default AlertForm