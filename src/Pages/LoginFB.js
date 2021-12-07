import React from "react";
import {useState, useContext} from "react"
import  { useForm, Controller } from "react-hook-form";
import firebase from '../Config/firebase';
import BreadKrumb from "../Components/BreadKrumb";
import AuthContext from "../Context/AuthContext";

import { Form, Button, Modal } from 'react-bootstrap';

function LoginFB() {
  const context = useContext(AuthContext)

  const rutasPage=["Home"]   
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        })

const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      sede: [
        {
          email: "",
          password: "",          
        }
      ]
    }
  });

  const onSubmit  = async (data) => {
    //console.log(indexes)
    console.log(data.email);
    console.log(data.password);
    try{
      const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
      console.log("user",responseUser.user.uid)
      if(responseUser.user.uid){
        const userInfo = await firebase.db.collection("afiliados")
        .where("userId","==",responseUser.user.uid)
        .get()
          
        console.log("userInfo",userInfo.docs[0]?.data())       
          setShow(true);  
          setmsg({title:"BienVenido", descr:"Afiliado con Exito"})
          
          context.loginUser(userInfo.docs[0]?.data())
          //context.userLogin(true)
          //history.push("/menuafis");
          
      }
    }catch(e){
        console.log("error",e)   
          setShow(true);  
          setmsg({title:"Ingrese nuevamente los datos", descr:"Afiliado no Encontrado"})       
    }
  };



  return (

    <>
    <BreadKrumb menuTipoUser={rutasPage} act="Login AFI" />
    

    <div className="wrap-appointment d-md-flex ftco-animated fadeInUp ">
    <div className="col-md-12 contact-wrap w-60 p-md-5 p-4"> 

    <div className="col-md-12 bg-primary p-5 heading-section heading-section-white shadow bg-white fadeInUp ftco-animated pb-5">
        <span className="subheading"></span>
        <h2 className="mb-6">LOGIN AFILIADO</h2>

    <Form onSubmit={handleSubmit(onSubmit)} className="appointment ">
      <div className="row justify-content-center">

      <div className="col-md-6">  
      <Form.Label className="form-group mt-4"><h6>Email*</h6></Form.Label>
      <Controller
      as={ <Form.Control required/>  }
      name="email"
      control={control}
      placeholder="Email"
      rules={{ required: true, minLength: 6 }}      
      />
      {errors.email && <h5 className="p-1 mt-2 text-dark">{"Campo introducudo demasiado corto"}</h5>}
      </div>

      <div className="col-md-6">  
      <Form.Label className="form-group mt-4"><h6>Password*</h6></Form.Label>
      <Controller
      as={ <Form.Control required/>  }
      name="password"
      control={control}
      placeholder="PsWd"
      rules={{ required: true, minLength: 6 }}      
      />
      {errors.password && <h5 className="p-1 mt-2 text-dark">{"Campo introducudo demasiado corto"}</h5>}
      </div>
 

      </div>    


   

      <div className="row justify-content-center">
      <Button className="btn btn-secondary py-3 px-4 col-md-6 mt-4" type="submit">Ingresar</Button>
      </div>
    
    </Form>
    </div>

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
    
    </div>
    </div>
    </>
  );
}

export default LoginFB