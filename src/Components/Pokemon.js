
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import React,{useState,useEffect} from "react"
import {getAll, getAllPag} from "../Services/ProductosService"

import Form from 'react-bootstrap/Form';


function Pokemon() {

  const [show, setShow] = useState(false);
  const [count, setCount] = useState()

  const [compra, setCompra] = useState("");
  const [poke, setPoke] = useState();
  
    const [loading,setLoading] = useState(true)

    useEffect(
      ()=>{
        setCount(1)
        getAll()
            .then(res=>{
                console.log(res.data.results)
                console.log(res.data.count)
                if(res.data.results){
                    setPoke(res.data.results)
                    setLoading(false)
                }

            })
      },[]
    )
/*
    const handlePage = (count) => {

      console.log(`envioForm:${count}`)
            getAllPag(count)
              .then(res=>{
                  console.log(res.data.results)
                  if(res.data.results){
                      setPoke(res.data.results)
                      setLoading(false)
                  }
              })
    }
*/
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`envioForm:${count}`)

        getAllPag(count-1)
              .then(res=>{
                  console.log(res.data.results)
                  if(res.data.results){
                      setPoke(res.data.results)
                      setLoading(false)
                  }
              })
    }



    if(loading){
      return(
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
          <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/>
        </svg>
      </div>
      )

    }else{
      return (
        <div className="Producto">
          <div class="container">

          <div className="row" style={{ flex: 1, flexWrap: "wrap"  }}>
          {/*
          <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Form.Control type="text" placeholder="Buscar Producto..." onChange={e => setBusca(e.target.value)} />
          </FormGroup>  
            <Button variant="primary" type="submit">BUSCAR</Button>
          </Form>
          <Button variant="primary" type="submit">BUSCAR</Button>
              
              {poke.map((poke, index)=>    
                <div className="col-lg-3 col-md-2 col-sm-2 ftco-animate fadeInUp ftco-animated pb-4 ">
                  <Card className="card text-center card text-white bg-secondary" style={{ width: '14rem' , backgroundColor: '#2d3e50'}}>
                  <Card.Img className="mx-auto d-block text-white"  style={{width: '10rem', height:'10rem' }} variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`} />  
                    <Card.Body>
                      <Card.Title>{poke.name}</Card.Title>

                      <Button variant="primary" onClick={() => {setCompra(`Se realizo su compra de: ${poke.name}`); setShow(true)}}>Comprar</Button>
                    </Card.Body>
                    
                  </Card>
                </div>  
              )}
      <div>
        <Button className="btn btn-primary btn-sm"
          onClick={() => {setCount(count - 1); handlePage(count)}}>Anterior</Button>  
        <Button className="btn btn-primary btn-sm float-end"
          onClick={() => {setCount(count + 1); handlePage(count)}}>Siguiente</Button>
      </div> 

        <p>{count}</p>
        */}




        <Form onSubmit={handleSubmit}>
          {/*
          <FormGroup>
          <Form.Control type="text" placeholder="CARGAR N°..." onChange={e => setCount(e.target.value)} />
          </FormGroup>  
            <Button variant="primary" type="submit">CARGAR</Button>
          */}  
            <Button className="btn btn-primary btn-sm" type="submit"
              onClick={() => {setCount(count - 1)}}>Anterior</Button>  
            <Button className="btn btn-primary btn-sm float-end" type="submit"
               onClick={() => {setCount(count + 1)}}>Siguiente</Button>
          </Form>

          <div className="ftco-animate fadeInUp ftco-animated pb-5">
            <div className="our_solution_category"> 

                {poke.map((poke, index)=>    
                  <div className="solution_cards_box sol_card_top_5 col-sm-24">   
                              
                                  <div className="solution_card col-lg-24 col-md-24 col-sm-24">
                                    <div className="hover_color_bubble"></div>
                                    
                                    <div className="solu_title">
                                      <h2>{poke.name}</h2>
                                      <p>{poke.url}</p>
                                    </div>
                                    <div className="solu_description">
                  
                                      <input type="submit" onClick={() => {setCompra(((index+1)+(count-1)*9)); setShow(true)}} value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                                    </div>
                                  </div>  
                            
                    </div>            
                )}
            </div>  
          </div>

              </div>
        </div>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title id="example-custom-modal-styling-title">
              {compra}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <img alt="" className="mx-auto d-block text-white"  style={{width: '14rem', height:'14rem' }} variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${compra}.svg`} />  

          </Modal.Body>
        </Modal>  
        </div>        
        );
      }
    }
export default Pokemon;