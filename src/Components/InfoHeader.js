import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Container, Row, Col } from 'react-bootstrap';

function InfoHeader() {
  
  return (
    <>
    <div className="top py-1">
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <p className="mb-0"><a href="/#">informacion@osseg.org.ar</a> | <a href="/#">Opción OSSEG Resol.N1793/2020 SSSalud</a> | <a href="/#">Usuarios Internos</a></p>
        </Col>
        <Col className="col-4 d-flex justify-content-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Sindicato Del Seguro</i></span></a>
              <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Asociación Mutual De Trabajadores De Seguros</i></span></a>
              <a href="/#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Superintendencia De Servicios De Salud</i></span></a>

            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>



    <div className="wrap ftco-animate fadeInUp ftco-animated">
	    <Container>
				<Row className="justify-content-between">
					<Col className="md-3 mb-md-0 mb-4 d-flex align-items-center">
						<a className="navbar-brand" href="index.html" style={{
      backgroundImage: 'url("https://www.osseg.org.ar/images/logo007.png")',backgroundRepeat: "no-repeat"}}>OSSEG OBRA SOCIAL DE SEGUROS</a>
					</Col>
					<Col className="md-7">
						<Row>
							<Col className="md-8 mb-md-0 mb-3">
								<div className="top-wrap d-flex">
									<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-location-arrow"></span></div>
									<div className="text"><span>Dirección</span><span>CARLOS PELLEGRINI 575 <br />C1009ABK BUENOS AIRES - ARGENTINA</span></div>
								</div>
							</Col>
							<Col>
								<div className="top-wrap d-flex">
									<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-phone"></span></div>
									<div className="text"><span>Teléfono</span><span>0800-777-67734</span></div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
  </>
  );
}

export default InfoHeader;