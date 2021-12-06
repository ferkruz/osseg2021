
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import React,{useState,useEffect} from "react"


function Deleg() {

  const [show, setShow] = useState(false);

  const delegCABAGBA = [
    {
      sede: "Sede Central C. Pellegrini",
      direc: "CARLOS PELLEGRINI 575 BUENOS AIRES",
      telef: "4131 2000",
      email: "informacion@osseg.org.ar",
      horario: "De 7:00 a 19:00",
      img: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg"
    },
    {
        sede: "Delegación Lomas De Zamora",
        direc: "MANUEL CASTRO 390",
        telef: "4292-4257",
        email: "lomasdezamora@osseg.org.ar",
        horario: "De 7:00 a 19:00",
        img: "https://www.osseg.org.ar/images/delegaciones/lomas.jpg"
    },
    {
        sede: "Sede Central C. Pellegrini",
        direc: "CARLOS PELLEGRINI 575 BUENOS AIRES",
        telef: "4131 2000",
        email: "informacion@osseg.org.ar",
        horario: "De 7:00 a 19:00",
        img: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg"
      },
      {
        sede: "Delegación Lomas De Zamora",
        direc: "MANUEL CASTRO 390",
        telef: "4292-4257",
        email: "lomasdezamora@osseg.org.ar",
        horario: "De 7:00 a 19:00",
        img: "https://www.osseg.org.ar/images/delegaciones/lomas.jpg"
    },
  ];  

      return (
        <>

          <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate fadeInUp ftco-animated pb-5">
                        <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>Delegaciones OSSEG <i class="fa fa-chevron-right"></i></span></p>
                        <h1 className="mb-0 bread">C.A.B.A. Y G.B.A.</h1>
                    </div>
                    </div>
                </div>
          </section>
          <div className="container">

          <div className="row" style={{ flex: 1, flexWrap: "wrap"  }}>
          <div className="fadeInUp ftco-animated pb-5">
            <div className="our_solution_category"> 

            {delegCABAGBA.map(data => 
            <div className="col-md-4 ftco-animated fadeInUp d-flex">

						<div className="staff bg-primary">
							<div className="img-wrap d-flex align-items-stretch" style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover'}}>
								<div className="img align-self-stretch"></div>
                            </div>
							<div className="text pt-3 px-3 pb-4 text-center">
								<h3>{data.sede}</h3>
								<span className="position mb-2">{data.direc}</span>
								<p><span className="fa fa-phone"></span> TELEFONO: <strong>{data.telef}</strong></p>
                                    <p><span className="fa fa-paper-plane"></span> EMAIL: <strong>{data.email}</strong></p>                                    
                                    <p><span className="fa fa-clock-o"></span> Horario: <strong>{data.horario}</strong></p>
                                    <ul className="ftco-social text-center">
                                        <li className="fadeInUp ftco-animated"><a href className="d-flex align-items-center justify-content-center" onClick={() => setShow(true)}><span className="fa fa-map-marker"></span></a></li>
                                    </ul>
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
        dialogclassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title id="example-custom-modal-styling-title">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <img className="mx-auto d-block text-white"  style={{width: '14rem', height:'14rem' }} variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg`} />  

          </Modal.Body>
        </Modal>  
        </>        
        );
 
    }
export default Deleg;