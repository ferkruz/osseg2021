import React,{useState} from "react"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const styles = {
    ToastContainer:{
      zIndex:999,
      padding: "3px",
      margin: "5px"
    }
  }

function InfoLogin(props){

  const [show, setShow] = useState(true);
  return (
    <>


    <ToastContainer style={styles.ToastContainer} position='bottom-end'>
        <Toast onClose={() => setShow(false)} show={show} delay={9000} autohide >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Nombre: <span>{props.nombre} {props.apellido}</span></strong>
                <small>PLAN: <strong>Integral</strong></small>
              </Toast.Header>
              <Toast.Body><small>IMED: </small>{props.imed}</Toast.Body>
        </Toast>
      </ToastContainer>  

</>
  );
}

export default InfoLogin;