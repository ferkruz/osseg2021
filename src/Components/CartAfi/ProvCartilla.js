import React, { useState, useContext, useEffect } from 'react'
import  { useForm } from "react-hook-form";
import { Form, Container, Modal } from 'react-bootstrap';

import SpinerMain from '../SpinerMain';
import OrderContext from '../../Context/OrderContext'; // Importing Context API

import firebase from '../../Config/firebase';
import ReactSelect from "react-select";

const ProvCartilla = () => {

  const { checkoutDetails, setCheckoutDetails } = useContext(OrderContext); // Context API
  const [provFB, setprovFB] = React.useState([])
  
  const [loading, setLoading] = useState(true)
  const [reload]=useState(true)
  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        })


    async function reqPcia(){
        try{
            const pcia = await firebase.firestore().collection("provincias").orderBy("pcia");
            pcia.get().then((querySnapshot) => {
            const pciaFB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                
                console.log(pciaFB)
                if(pcia){
                    setprovFB(pciaFB)
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
            if(reload)reqPcia()
        },[reload]
    )   
  
    const { formState: { errors } } = useForm();
    // Destructuring object from Context API
    //const { shippingData } = checkoutDetails;
    //const { provData } = checkoutDetails;



    // set value for default selection
    const [selectedValue, setSelectedValue] = useState([]);
 
    // handle onChange event of the dropdown
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);

        const data = { ...checkoutDetails }
            data["provData"] = Array.isArray(e) ? e.map(x => x.value) : [];
            setCheckoutDetails(data);
    }

  if(loading){
    return(
        <SpinerMain />
    )

  }else{
    return (
          <Container className="col-md-11 bg-primary p-5 heading-section heading-section-white shadow mt-0 mb-2">
            {/*<h5>ProvCartilla</h5>*/}
            <h2 class="mb-6">Provincia</h2>

            <Form className="appointment ">

        <ReactSelect name="provincia" 
        isMulti
        isClearable
        required
        placeholder="Seleccionar Provincia"
        //value={provFB.filter(itemFB => itemFB.value === selectedValue)} // set selected value
        
        options = { provFB.map((itemFB) => {
            return {
              value: itemFB.id,
              label: itemFB.pcia,
            };
          })}
        //value={provFB.filter(item0FB => selectedValue.includes(item0FB.value))} // set selected values
        onChange={handleChange} // assign onChange function
      />
      {errors.provincia && <h5 className="p-1 mt-2 text-dark">{"Campo introducudo demasiado corto"}</h5>}

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
export default ProvCartilla