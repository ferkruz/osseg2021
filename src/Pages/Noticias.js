import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import BreadKrumb from "../Components/BreadKrumb";

function Noticias() {

  const rutasPage=["Home", "menucat"]
  return (
    <>
    <BreadKrumb menuTipoUser={rutasPage} act="Noticias" />
		<section className="ftco-section">
      <Container>
        <Row>
          <Col className="md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry">
              <a href="/#" className="block-20 rounded img" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}} data-stellar-background-ratio="0.5">
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading">Aumento en el reintegro para Celiacos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry align-self-stretch">
              <a href="/#" className="block-20 rounded" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}}>
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="/#">Aumento en el reintegro para Celiacos</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry">
              <a href="/#" className="block-20 rounded img" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}} data-stellar-background-ratio="0.5">
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="/#">Aumento en el reintegro para Celiacos</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>

          <Col className="col-md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry align-self-stretch">
            <a href="/#" className="block-20 rounded img" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}} data-stellar-background-ratio="0.5">
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">              		
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="/#">Aumento en el reintegro para Celiacos</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry">
              <a href="/#" className="block-20 rounded img" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}} data-stellar-background-ratio="0.5">
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="/#">Aumento en el reintegro para Celiacos</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 d-flex fadeInUp ftco-animated pb-5">
            <div className="blog-entry align-self-stretch">
              <a href="/#" className="block-20 rounded" style={{ backgroundImage: `url(https://via.placeholder.com/350x250?text=OSSEG)`}}>
              </a>
              <div className="text mt-3">
              	<div className="posted mb-3 d-flex">
              		<div className="desc pl-3">
              			<span></span>
              			<span>07 Abril 2021</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="/#">Aumento en el reintegro para Celiacos</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae nisi vel pharetra. Pellentesque iaculis sed ex eu dictum. Donec pharetra eleifend purus quis scelerisque. Mauris sed condimentum nunc, quis molestie velit. Fusce in ligula sem. Nunc malesuada dignissim porta. </p>
                <p><Button className="btn btn-primary">Leer Más</Button></p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <div className="block-27">
              <ul>
                <li><a href="/#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="/#">2</a></li>
                <li><a href="/#">3</a></li>
                <li><a href="/#">4</a></li>
                <li><a href="/#">5</a></li>
                <li><a href="/#">&gt;</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    
    
    
    </>
  );
}

export default Noticias
