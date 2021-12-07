import React, { useState, useContext, useEffect } from 'react'
import  { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Row, Col, Container, Modal } from 'react-bootstrap';

import SpinerMain from '../SpinerMain';
import OrderContext from '../../Context/OrderContext'; // Importing Context API

import firebase from '../../Config/firebase';
import ReactSelect from "react-select";

const LocCartilla = () => {

    const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API
    const [localFB, setlocalFB] = React.useState([])
    
    const [loading, setLoading] = useState(true)
    const [reload,setReload]=useState(true)
    const [show, setShow] = useState(false);
    const [msg, setmsg] = useState({
            title: "",
            descr: ""
          })
  
  
      async function reqLocal(){
          try{
              const local = await firebase.firestore().collection("prestadores");
              local.get().then((querySnapshot) => {
              const localFB = querySnapshot.docs.map((doc) => ({ Nombre: doc.Nombre, ...doc.data() }))
                  
                  console.log(localFB)

                  const sedesFB =localFB.map((doc) => ({ sede: doc.sede }))  
                  console.log(sedesFB)

                  const localSede=[];
                  for (var i =0; i<sedesFB.length; i++){ 
                    for (var j =0; j<sedesFB[i].sede.length; j++){ 
                      //console.log (i+"-"+j+sedesFB[i].sede[j].local)
                      if(!localSede.includes(sedesFB[i].sede[j].local)){
                        localSede.push(sedesFB[i].sede[j].local)  
                      }
                    } 
                  } 

                  if(local){
                      setlocalFB(localSede)
                      setLoading(false)
                  }
              })
              }catch(e){
                  console.log("error",e.code)
                    setShow(true); 
                    setmsg({title:"Consulta Fallida", descr:"Fallo Base de Datos"})             
              }
      }
        
      useEffect(
          ()=>{
              if(reload)reqLocal()
          },[reload]
      )   
    
      const {  control,  formState: { errors } } = useForm();
      // Destructuring object from Context API
      const { shippingData } = checkoutDetails;
      const { localidadData } = checkoutDetails;
  
  
  
      // set value for default selection
      const [selectedValue, setSelectedValue] = useState([]);
   
      // handle onChange event of the dropdown
      const handleChange = (e) => {
          setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  
          const data = { ...checkoutDetails }
              data["localidadData"] = Array.isArray(e) ? e.map(x => x.value) : [];
              setCheckoutDetails(data);
      }
  
    if(loading){
      return(
          <SpinerMain />
      )
  
    }else{
      return (
          <Container className="col-md-12 bg-primary p-5 heading-section heading-section-white shadow mt-5 mb-5">
              {/*<h5>ProvCartilla</h5>*/}
              <h2 class="mb-6">Localidad</h2>
  
              <Form className="appointment ">
  
          <ReactSelect 
          isMulti
          isClearable
          placeholder="Seleccionar Localidad"
          //value={especFB.filter(itemFB => itemFB.value === selectedValue)} // set selected value
          
          options = { localFB.map((itemFB) => {
              return {
                value: itemFB,
                label: itemFB,
              };
            })}
          //value={especFB.filter(item0FB => selectedValue.includes(item0FB.value))} // set selected values
          onChange={handleChange} // assign onChange function
        />
  
  {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
        </div>}
  
      
              </Form>
  
              <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
              {msg.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              {msg.descr}
              </p>
            </Modal.Body>
          </Modal>  
          </Container>
      );
  }
  }
export default LocCartilla