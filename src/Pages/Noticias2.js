import React from "react";
import {useState,useEffect} from "react"
import  { useForm, Controller } from "react-hook-form";
import firebase from '../Config/firebase';
import ReactSelect from "react-select";
import BreadKrumb from "../Components/BreadKrumb";

import { Form, Button, Modal } from 'react-bootstrap';

function Noticias2() {
  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);

  const [planAfiFB, setplanAfiFB] = React.useState([])
  const [tipoPrestFB, settipoPrestFB] = React.useState([])
  const [especFB, setespecFB] = React.useState([])

  const rutasPage=["Home", "menuafis" ]   
  
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        })


    useEffect(()=> {
    (async (data) => {    
        try{
        const planAfi = await firebase.firestore().collection('planAfi').orderBy("plan");
        planAfi.get().then((querySnapshot) => {
        const planAfiFB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            
            console.log(planAfiFB)
            if(planAfiFB){
                setplanAfiFB(planAfiFB)
                setLoading(false)
            }
        })
        }catch(e){
            console.log("error",e.code)
            if(e.code==="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
      })()
    }, []);
    useEffect(()=> {
      (async (data) => {    
        try{
        const tipoPrest = await firebase.firestore().collection("tipoPrest")
        tipoPrest.get().then((querySnapshot) => {
        const tipoPrestFB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            
            console.log(tipoPrestFB)
            if(tipoPrest){
                settipoPrestFB(tipoPrestFB)
                setLoading(false)
            }
        })
        }catch(e){
            console.log("error",e.code)
            if(e.code==="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
      })()
    }, []);
    useEffect(()=> {
      (async (data) => {    
        try{
        const espec = await firebase.firestore().collection("especialidad").orderBy("espec");
        espec.get().then((querySnapshot) => {
        const especFB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            
            console.log(especFB)
            if(espec){
                setespecFB(especFB)
                setLoading(false)
            }
        })
        }catch(e){
            console.log("error",e.code)
            if(e.code==="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
      })()
    }, []);

const { handleSubmit, unregister, control, register, setError, formState: { errors } } = useForm({
    defaultValues: {
      sede: [
        {
          direc: "",
          local: "",
          provi: "",
          email: "",
          telef: "",
          telef2: "",
          horaAp: "09:00",
          horaCi: "19:00",
        }
      ]
    }
  });

  const onSubmit  = async (data) => {
    //console.log(indexes)
    console.log(data.sede);
    console.log(data.planAfi);

    try{
      const document = await firebase.db.collection("prestadores")
      //.add({data})

      .add({        
        Nombre:data.Nombre,
        sede:data.sede,        
        tipoPrest:data.tipoPrest,
        planAfi:data.planAfi,
        especilidades: data.espec
      })

      console.log("document",document)
      setShow(true);  
      setmsg({title:"Enorabuena", descr:"Registrado con Exito"})

    }catch(e){
        console.log("error",e.code)
        /*if(e.code==="auth/email-already-in-use"){
            setShow(true); 
            setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
        }*/
    }
  };

  const addUsuario = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeUsuario = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
    
    {/*
    register( `sede[${index}].direc`, { value: 'Billy' })
    register( `sede[${index}].local`, { value: 'ELNiño' })
    register( `sede[${index}].email`, { value: '000gmal.com' })
    register( `sede[${index}].telef`, { value: '66-6666-6666' })
    */}
    unregister(`sede[${index}]`)

  };

  const clearUsuarios = () => {
    setIndexes([]);
    setCounter(0);   
    console.log (indexes)
    register( 'sede.direc', { value: '' })
    register( 'sede.local', { value: '' })
    register( 'sede.provi', { value: '' })
    register( 'sede.email', { value: '' })
    register( 'sede.telef', { value: '' })
    register( 'sede.telef2', { value: '' })
    register( 'sede.horaAp', { value: '' })
    register( 'sede.horaCi', { value: '' })    
  };


  return (
    <>
    <BreadKrumb menuTipoUser={rutasPage} act="AltaAfi" />

    <div className="wrap-appointment d-md-flex ftco-animated fadeInUp ">
    <div className="col-md-12 contact-wrap w-60 p-md-5 p-4"> 

    <div className="col-md-12 bg-primary p-5 heading-section heading-section-white shadow">
        <span className="subheading"></span>
        <h2 className="mb-6">ALTA PRESTADOR</h2>

    <Form onSubmit={handleSubmit(onSubmit)} className="appointment ">
      <div className="row justify-content-center">

      <fieldset className="mt-4">       
      <Form.Label className="form-group mt-4"><h6>Nombre Completo*</h6></Form.Label>
      <Controller
      as={ <Form.Control required/>  }
      name="Nombre"
      control={control}
      placeholder="Nombre"
      rules={{ required: true, minLength: 6 }}      
      />
      {errors.Nombre && <p>{"kkkk"}</p>}
{/*
      <Form.Label className="form-group mt-4"><h6>Tipo Prest*</h6></Form.Label>
      <Controller
      as={ <Form.Control required/>  }
      name="Apellido"
      control={control}
      placeholder="Apellido"
      rules={{ required: true }}
      />
*/}

      <Form.Label className="form-group mt-4"><h6>Tipo Prest*</h6></Form.Label>
      <Controller
        as={<ReactSelect/>}
        const options = { tipoPrestFB.map((itemFB) => {
        return {
          value: itemFB.id,
          label: itemFB.tipo,
        };
      })}
        name="tipoPrest"
        placeholder="Seleccione Tipo Prest (UNICO)"
        defaultValue= ""
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return { value: selected };
        }}
      />




</fieldset>
      {indexes.map(index => {
        const fieldName = `sede[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName} className="border border-primary mt-4">

          <Form.Label className="form-group mt-4"><h6>Dirección Completa {index}*</h6></Form.Label>
            <Controller
            as={ <Form.Control required/>  }
            type="text"
            name={`${fieldName}.direc`}
            control={control}
            placeholder="Dirección Completa"
            //{...register(`${fieldName}.direc`)}
            rules={{ required: true }}
            />

          <Form.Label className="form-group mt-4"><h6>Localidad {index}*</h6></Form.Label>
            <Controller
            as={ <Form.Control required/>  }
            type="text"
            name={`${fieldName}.local`}
            control={control}
            placeholder="Localidad"
            rules={{ required: true }}
            />
          
          <Form.Label className="form-group mt-4"><h6>Provincia {index}*</h6></Form.Label>  
            <Controller
            as={ <Form.Control required/>  }
            type="text"
            name={`${fieldName}.provi`}
            control={control}
            placeholder="Provincia"
            defaultValue="Provincia"
            rules={{ required: true }}
            />

          <Form.Label className="form-group mt-4"><h6>Telefono {index}*</h6></Form.Label>  
            <Controller
            as={ <Form.Control required/>  }
            type="phone"
            name={`${fieldName}.telef`}
            control={control}
            placeholder="+54 9 XXX XXX XXXX"
            rules={{ required: true }}
            />

          <Form.Label className="form-group mt-4"><h6>Telefono2 {index}</h6></Form.Label>  
            <Controller
            as={ <Form.Control required/>  }
            type="phone"
            name={`${fieldName}.telef2`}
            control={control}
            placeholder="+54 9 XXX XXX XXXX"
            />


          <Form.Label className="form-group mt-4"><h6>Email {index} *</h6></Form.Label>  
            <Controller
            as={ <Form.Control required/>  }
            type="email"
            name={`${fieldName}.email`}
            control={control}
            placeholder="XXXXXXX@XXXXX.com"
            rules={{ required: true }}
            />            
      
          <Form.Label className="form-group mt-4"><h6> Horario Apertura {index} *</h6></Form.Label>  
            <Controller
            as={ <Form.Control required/>  }
            type="time"
            name={`${fieldName}.horaAp`}
            control={control}
            placeholder="09:00"
            rules={{ required: true }}
            />  

            <Form.Label className="form-group mt-4"><h6> Horario Apertura {index} *</h6></Form.Label>  
              <Controller
              as={ <Form.Control required/>  }
              type="time"
              name={`${fieldName}.horaCi`}
              control={control}
              placeholder="19:00"
              defaultValues="19:00"
              rules={{ required: true }}
              />      

            <Button variant="outline-danger" className="btn btn-sm mb-4 mt-4 col-2" type="button" onClick={removeUsuario(index)}>
              Borrar
            </Button>
          </fieldset>
        );
      })}

      </div>    

      <Button className="btn btn-secondary btn-sm mt-4 ml-2" type="submit" onClick={addUsuario}>
        Añadir Consultorio
      </Button>
      <Button variant="outline-danger" className="btn btn-sm mt-4 ml-2" type="submit" onClick={clearUsuarios}>
        Eliminar Consultorio
      </Button>

      {/*<Controller className="form-group mt-4"              
              as={<Form.Check className="form-group mt-4" />}
              name="AtVirtual"
              control={control}
                  type="switch"
                  label="Atención Virtual"
                  defaultValue= {false}

                 {comentar! register={register}
                  setIsSwitchOn={setIsSwitchOn}
                  onChange={() => {
                    return { value: false };
                  }}
                  onChange={onChange} checked={value}
                  checked={isSwitchOn}
                  onChange={onSwitchAction}comentar!}

                  onClick={(onSwitchAction) => {
                    return { value: {isSwitchOn} };
                  }}
            />
        */}


      <Form.Label className="form-group mt-4"><h6>Plan *</h6></Form.Label>
      <Controller
        as={<ReactSelect isMulti />}
        const options = { planAfiFB.map((itemFB) => {
        return {
          value: itemFB.id,
          label: itemFB.plan,
        };
      })}
        name="planAfi"
        placeholder="Seleccione Planes"
        defaultValue= ""
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return { value: selected };
        }}
      />

      <Form.Label className="form-group mt-4"><h6>Especialidades *</h6></Form.Label>
      <Controller
        as={<ReactSelect isMulti />}
        const options = { especFB.map((itemFB) => {
        return {
          value: itemFB.id,
          label: itemFB.espec,
        };
      })}
        name="espec"
        placeholder="Seleccione Especialidades"
        defaultValue= ""
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          return { value: selected };
        }}
      />
   

      <div className="row justify-content-center">
      <Button className="btn btn-secondary py-3 px-4 col-md-6 mt-4" type="submit">Registrar Prestador</Button>
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
    
    </div></div>
    </>
  );
}

export default Noticias2