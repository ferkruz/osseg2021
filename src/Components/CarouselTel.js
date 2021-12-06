import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from "react-bootstrap";

function CarouselTel() {
    return (
        <>
        <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<span className="subheading">Kinesiología</span>
            <h2>San Martín</h2>
          </div>
        </div>
    		<div className="row">
          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-chiropractic"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Spinal Manupulation</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div>
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-acupuncture"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Medical Acupuncture</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div> 

          </div>
          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-electrotherapy"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Electrotherapy</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div> 
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-examination"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Therapeutic Exercise</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div>    
          </div>

          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-lymph-nodes"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Manual Lympahtic</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div>
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-bone"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Joint Mobilization</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                <p><a href="/#" className="btn-custom">Leer Más</a></p>
              </div>
            </div>       
          </div>
        </div>
    	</div>
        </section>

        <section className="ftco-section testimony-section ftco-navbar-light">
        <br/>
          <div className="col-md-12 heading-section heading-section-white text-center ftco-animate fadeInUp ftco-animated">    
            <h2>Teléfonos Útiles</h2>
          </div>

        <Carousel variant="ligth">
        
        <Carousel.Item>
            <img
            className="d-block w-100"
            height="250px"
            src=""
            alt="First slide"
            />
        <Carousel.Caption>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
            <div className="item">
                        <div className="testimony-wrap py-4">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa fa-phone"></span></div>
                          <div className="text">
                            <p className="mb-4">Servicio de Orientación Permanente</p>
                            <div className="d-flex align-items-center">
                    <div className="text">
                      <div className="d-flex align-items-center">
                        <div className="pl-5">
                          <p className="name">011 4322-0456/0210</p>
                          <p className="name">011 15 6377 5318</p>
                          <span className="position">Horario 24hs</span>
                          </div>
                        </div>
                      </div>
                            </div>
                          </div>
                        </div>
                      </div>

            </Col>
          ))}
        </Row>
        </Carousel.Caption>        
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-100"
            height="250px"
            src=""
            alt="Second slide"
            />

            <Carousel.Caption>
            <Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
     <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa fa-phone"></span></div>
                  <div className="text">
                    <p className="mb-4">Servicio de Orientación Permanente</p>
                    <div className="d-flex align-items-center">
						<div className="text">
							<div className="d-flex align-items-center">
								<div className="pl-5">
									<p className="name">011 4322-0456/0210</p>
									<p className="name">011 15 6377 5318</p>
									<span className="position">Horario 24hs</span>
								  </div>
							  </div>
						  </div>
	                  </div>
                  </div>
                </div>
              </div>

    </Col>
  ))}
</Row>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            height="250px"
            src=""
            alt="Third slide"
            />

            <Carousel.Caption>
            <Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
     <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa fa-phone"></span></div>
                  <div className="text">
                    <p className="mb-4">Servicio de Orientación Permanente</p>
                    <div className="d-flex align-items-center">
						<div className="text">
							<div className="d-flex align-items-center">
								<div className="pl-5">
									<p className="name">011 4322-0456/0210</p>
									<p className="name">011 15 6377 5318</p>
									<span className="position">Horario 24hs</span>
								  </div>
							  </div>
						  </div>
	                  </div>
                  </div>
                </div>
              </div>

    </Col>
  ))}
</Row>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
        </section>
        </>                
    );
  }
  
export default CarouselTel;