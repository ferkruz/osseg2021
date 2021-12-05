import React from "react"

function Registro() {
    return (
      <div className="wrap-appointment d-md-flex ftco-animated fadeInUp ">
      <div className="col-md-12 contact-wrap w-60 p-md-5 p-4"> 
          
        <div className="wrapper wrapper-content ">
          <div className="row no-gutters">
            <div className="col-md-7 d-flex">
              <div className="contact-wrap w-60 p-md-5 p-4">
                <h3 className="mb-4">Formulario de Contacto</h3>
                <form method="POST" id="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Nombre"/>
                      </div>
                    </div>
                    <div className="col-md-6"> 
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto"/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Mensaje"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" value="Enviar Mensaje" className="btn btn-primary"/>
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
              <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                <h3 className="mb-4 mt-md-4">Contacto</h3>
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Dirección:</span> CARLOS PELLEGRINI 575 - C1009ABK BUENOS AIRES</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Teléfono/ Fax:</span> <a href="tel:4131 2000">4131 2000</a></p>
              
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Email:</span> <a href="mailto:informacion@osseg.org.ar">informacion@osseg.org.ar</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text pl-3">
                    <p><span>Website:</span> <a href="/#">osseg.org.ar</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
               
         



        {/*<Form>
          <Form.Group>
              
              <Form.Label className="mt-4">Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Nombre" />
          
              <Form.Label className="mt-4">Apellido:</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Apellido" />

              <Form.Label className="mt-4">Teléfono:</Form.Label>
              <Form.Control type="number" placeholder="Ingrese Teléfono" />

              <Form.Label className="mt-4">Password:</Form.Label>
              <Form.Control type="password" placeholder="Ingrese Password" />

              <Form.Label className="mt-4">Confirmar password:</Form.Label>
              <Form.Control type="password" placeholder="Confirmar Password" />
              <Button className="btn btn-success btn-lg mt-4" type="button">REGISTRARSE</Button>
          </Form.Group>
        
        </Form> */}
      </div>
    </div>
    );
  }
  
  export default Registro;