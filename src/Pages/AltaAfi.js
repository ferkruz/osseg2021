import React, { useRef, useState } from "react";
import firebase from '../Config/firebase';
import { useForm, Controller } from "react-hook-form";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import BreadKrumb from "../Components/BreadKrumb";

function AltaAfi (){
        

        const { handleSubmit, control, formState: { errors } , watch } = useForm();
        const password = useRef({});
        const newpassword = useRef({});

        const rutasPage=["Home"];
        const [showModal, setShowModal] = useState(false);
        const [msg, setmsg] = useState({
          title: "",
          descr: ""
        })

        const [show, setShow] = useState(false);
        const [errorAlert, setErrorAlert] =useState("")
        const [colorAlert, setcolorlert] =useState("danger")

        password.current = watch("password", "");
        newpassword.current = watch("password_repeat", "");

        const onSubmit = async (data) => {
        console.log("data",data);


        if (password.current.length === 0) {

            setShow(true);
            setErrorAlert("Debe Especificar un PassWord");
            setcolorlert('info')
          
          return;
        }
    
        var match = password.current.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d)/
        );
        if (!match) {
    
          setShow(true);
          setcolorlert('danger')
          setErrorAlert("La contraseña debe contener al menos un número, una mayúscula y una minúscula y un carácter especial")
          return;
        }
    
        if (password.current.length < 6) {
          setShow(true);
          setcolorlert('warning')
          setErrorAlert("La contraseña debe tener al menos 6 caracteres")  
          return;
        }
    
        if (newpassword.current !== password.current) {
          setShow(true);
          setcolorlert('warning')
          setErrorAlert("las contraseñas no coinciden")  
          return;
        }
    
        setcolorlert('success')
        setShow(true);
        setErrorAlert("La contraseña ha sido Guardada") 
    
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("user",responseUser.user.uid)
            
              if(responseUser.user.uid){
                const document = await firebase.db.collection("afiliados")
                .add({
                    userId:responseUser.user.uid,
  
                    nombre:data.nombre,
                    apellido:data.apellido,
                    email:data.email,
                    telef:data.telef,
                    password:data.password
                    
                })
                console.log("document",document)
                setShowModal(true);  
                setmsg({title:"Enorabuena", descr:"Registrado con Exito"})
              }
        }catch(e){
            console.log("error",e.code)
              if(e.code==="auth/email-already-in-use"){
                setShowModal(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
              }
          }     

    };
    
    
        return(
            <>
               <BreadKrumb menuTipoUser={rutasPage} act="AltaAfi" />

               <div className="wrap-appointment d-md-flex ftco-animated fadeInUp ">
               <div className="col-md-12 contact-wrap w-60 p-md-5 p-4"> 
                    <div className="col-md-12 bg-primary p-5 heading-section heading-section-white shadow">
                    <span className="subheading"></span>
                    <h2 className="mb-6">ALTA AFILIADOS</h2>

                    <Form onSubmit={handleSubmit(onSubmit)} className="appointment ">

                    <Form.Label className="form-group mt-4"><h6>Nombre*</h6></Form.Label>
                    <Controller
                    as={ <Form.Control required/>  }
                    name="nombre"
                    control={control}
                    placeholder="Nombre"
                    rules={{ required: true }}      
                    />
                    {errors.nombre && <h5 className="p-1 mt-2 text-dark">{"Campo introducudo demasiado corto"}</h5>}
                    

                    <Form.Label className="form-group mt-4"><h6>Apellido*</h6></Form.Label>
                    <Controller
                    as={ <Form.Control required/>  }
                    name="apellido"
                    control={control}
                    placeholder="Apellido"
                    rules={{ required: true }}      
                    />
                    {errors.apellido && <h5 className="p-1 mt-2 text-dark">{"Campo introducudo demasiado corto"}</h5>}

                    <Form.Label className="form-group mt-4"><h6>Telefono*</h6></Form.Label>  
                    <Controller
                    as={ <Form.Control required/>  }
                    type="phone"
                    name="telef"
                    control={control}
                    placeholder="+54 9 XXX XXX XXXX"
                    rules={{ required: true }}
                    />

                    <Form.Label className="form-group mt-4"><h6>Email*</h6></Form.Label>  
                    <Controller
                    as={ <Form.Control required/>  }
                    type="email"
                    name="email"
                    control={control}
                    placeholder="xxxx@xxxxx.com"
                    rules={{ required: true }}
                    />     

                    <div className="row justify-content-center">
                    <div className="col-md-6">
                    
                    <Form.Label className="form-group mt-4"><h6>Password*</h6></Form.Label>
                    <Controller
                    as={ <Form.Control required/>  }
                    name="password"
                    control={control}
                    placeholder="PsWd"
                    rules={{ required: true}}      
                    />
                    </div>

                    <div className="col-md-6">  
                    <Form.Label className="form-group mt-4"><h6>Password Confirmar*</h6></Form.Label>
                    <Controller
                    as={ <Form.Control required/>  }
                    name="password_repeat"
                    control={control}
                    placeholder="Password"
                    rules={{ required: true }}      
                    />

                    </div>
                    </div>
                    

                    {/*
                        <AlertForm show={show} colorAlert={colorAlert} errorAlert={errorAlert}/> 
                        NO FUNCIONA CERRAR ALERT
                        import AlertForm from "../Components/Form/AlertForm";
                      <AlertForm show={show} colorAlert={colorAlert} errorAlert={errorAlert}/> */}                         

                            <Alert className="mt-2 mr-2" show={show} variant={colorAlert}>
                                <Alert.Heading>Mensaje de Password</Alert.Heading>
                                <h6>
                                {errorAlert}
                                </h6>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShow(false)} variant={colorAlert}>
                                        Cerrar
                                    </Button>
                                </div>
                            </Alert>     
                    <div className="row justify-content-center">  
                    <Button className="btn btn-secondary py-3 px-4 col-md-6 mt-4" type="submit">Registrarse</Button>
                    </div> 
                    
                    </Form>
                    </div>
                    
                    </div>
                    </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
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
               
            </>
        )
      
    
    
    
}
export default AltaAfi