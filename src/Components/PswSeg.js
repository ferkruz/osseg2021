import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {Container, Alert, Button, Form} from 'react-bootstrap'


function PswSeg(props){
  //const {label,type,register} = props   
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();
  const password = useRef({});
  const newpassword = useRef({});

  const [show, setShow] = useState(false);
  const [errorAlert, setErrorAlert] =useState("")
  const [colorAlert, setcolorlert] =useState("danger")

  password.current = watch("password", "");
  newpassword.current = watch("password_repeat", "");

  const onSubmit = async (data) => {
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

    //register( 'password', { value: 'OK!!!!' })
    //props( 'password', { value: 'OK!!!!' })
  };

  return (
    <>
{/*    
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Label className="mt-2 mr-2">Password
      <Form.Control className="sm" {...register("password")} placeholder="Número" />
      {errors.password && <p>{errors.password.message}</p>}
      </Form.Label>

      <Form.Label className="mt-2 mr-2">Repeat password
      <Form.Control className="sm" {...register("password_repeat")} placeholder="Número"/>
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
      </Form.Label>

      <Button className="btn btn-sm" type="submit" onClick={handleSubmit(onSubmit)}>Enviar</Button>
    </Form>

    <Alert className="mt-2 mr-2" show={show} variant={colorAlert}>
        <Alert.Heading>Mensaje de Password</Alert.Heading>
        <p>
         {errorAlert}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant={colorAlert}>
            Cerrar
          </Button>
        </div>
    </Alert>
*/}




    <Form onSubmit={(e) => e.preventDefault()} className="appointment ">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <Form.Label className="form-group mt-4"><h6>Password </h6>
              <Form.Control className="form-control" {...register("password")} placeholder="Password" />

          </Form.Label>
          </div>

          <div className="col-md-6">
          <Form.Label  className="form-group mt-4"><h6>Repetir PassWord </h6>
          <Form.Control className="form-control" {...register("password_repeat")} placeholder="Password"/>
                             
          </Form.Label>
          </div>
          <Button className="btn btn-secondary py-3 px-4 col-md-6" type="submit" onClick={handleSubmit(onSubmit)}>Registrarse PSW</Button>
        </div>
    </Form>

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
  
    </>
  );
}

export default PswSeg