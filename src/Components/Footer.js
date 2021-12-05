
import {Col, Row} from "react-bootstrap";



function Footer() {  
      return (

        <footer className="ftco-animate fadeInUp ftco-animated footer ftco-no-pt">

            <Row className="mb-5 ml-2">
              <Col className="md-12 col-lg">
                <div className="ftco-footer-widget py-4 py-md-5">
                  <h2 className="logo"><a href="/#">OSSEG OBRA SOCIAL DE SEGUROS</a></h2>
                  <p>OSSEG OBRA SOCIAL DE SEGUROS;<br/>RNOS 0-0090-1</p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
                    <li className="ftco-animate"><a href="/#"><span className="fa fa-twitter"></span></a></li>
                    <li className="ftco-animate"><a href="/#"><span className="fa fa-facebook"></span></a></li>
                    <li className="ftco-animate"><a href="/#"><span className="fa fa-instagram"></span></a></li>
                  </ul>
                </div>
              </Col>
              <Col className="md-6 lg">
                <div className="ftco-footer-widget ml-md-5 py-5">
                  <h2 className="ftco-heading-2">Servicios</h2>
                  <ul className="list-unstyled">
                    <li><a href="/#" className="py-1 d-block"><span className="fa fa-check mr-3"></span>Alta Afiliado</a></li>
                    <li><a href="/#" className="py-1 d-block"><span className="fa fa-check mr-3"></span>Delegaciones</a></li>
                    <li><a href="/#" className="py-1 d-block"><span className="fa fa-check mr-3"></span>Programas Preventivos</a></li>
                    <li><a href="/#" className="py-1 d-block"><span className="fa fa-check mr-3"></span>Noticias</a></li>
                    <li><a href="/#" className="py-1 d-block"><span className="fa fa-check mr-3"></span>Contacto</a></li>
                  </ul>
                </div>
              </Col>
              <Col className="md-6 lg">
                <div className="ftco-footer-widget py-4 py-md-5">
                  <h2 className="ftco-heading-2">Informacion de Contacto</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><a href="/#"><span className="icon fa fa-map"></span><span className="text"> Carlos Pellegrini 575 CABA</span></a></li>
                      <li><a href="/#"><span className="icon fa fa-phone"></span><span className="text"> 0800-777-67734</span></a></li>
                      <li><a href="/#"><span className="icon fa fa-paper-plane"></span><span className="text"> informacion@osseg.org.ar</span></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="md-6 lg">
                <div className="ftco-footer-widget bg-primary p-4 py-5">
                  <h2 className="ftco-heading-2">Línea Gratuita de Orientación Al Afiliado</h2>
                  <div className="opening-hours">
                    <h4>Atención de 10 a 18Hs.</h4>
                    <p className="pl-3">
                      <span>000000000000</span>
                    </p>
                    <h4>Atención de 10 a 18Hs.</h4>
                    <p className="pl-3">
                      <span>000000000000</span>
                    </p>
                  </div>
                </div>
              </Col>

              <p className="col-md-12 text-center">
                Desarrollado en OSSEG | Demo de Diseño y Programación WEB | <i class="fa fa-behance-square" aria-hidden="true"></i> 
                <a href="https://www.behance.net/ferkruz" target="_blank" rel="noreferrer"> | Fernando Cruz</a>
              </p>
              
            </Row>            

        </footer>  

        );
 
    }
export default Footer;