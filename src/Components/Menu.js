import React from 'react';

import AuthContext from "../Context/AuthContext";

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  
  return (
    <>
  <AuthContext.Consumer>
  {
    context=> 
    <>


  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-animate fadeInUp ftco-animated">
    <Container>
    {!context.userInfo && 
      <><div className="order-lg-last">
        <Nav.Link as={Link} to="/loginFB"><a href="/#" className="btn btn-primary">Loginfb USUARIOS</a></Nav.Link>
      </div></>
    } 

    {context.userInfo && 
      <><div className="order-lg-last">
        <Nav.Link as={Link} to="/home" onClick={context.logoutUser}><a href="/#" className="btn btn-primary">{context.userInfo.nombre} {context.userInfo.apellido}</a></Nav.Link>
      </div></>
    } 
      

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/"><a href="/#" className="nav-link">Home</a></Nav.Link>
            </li>
          </ul>
          {!context.userInfo &&
          <><ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/altaAfi" ><a href="/#" className="nav-link">Alta Afiliado</a></Nav.Link>
            </li>
          </ul></>
          }
          {context.userInfo &&
          <><ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/menuafis" ><a href="/#" className="nav-link">Menu Afiliados</a></Nav.Link>
            </li>
          </ul></>
          }

          {context.userInfo &&
          <><ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/cartilla" ><a href="/#" className="nav-link">Cartilla</a></Nav.Link>
            </li>
          </ul></>
          }
          
          {!context.userInfo &&
          <><ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                  <NavDropdown title="Delegaciones" id="collasible-nav-dropdown" >
                    <NavDropdown.Item as={Link} to="/delCABAGBA">C.A.B.A. y G.B.A.</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Buenos Aires y La Pampa</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mesopotamia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cuyo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Noroeste</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Patagonia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Santa Fé Norte y Chaco</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Santa Fé Sur</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">xxxxxx</NavDropdown.Item>
                  </NavDropdown>
                  </a>
                </li>
            </ul> 
          </>
          }

               

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/progprevent" ><a href="/#" className="nav-link">Programas Preventivos</a></Nav.Link>
            </li>
        </ul>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/noticias" ><a href="/#" className="nav-link">Noticias</a></Nav.Link>
            </li>
          </ul>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Nav.Link as={Link} to="/registro"><a href="/#" className="nav-link">Contacto</a></Nav.Link>
            </li>
        </ul>  
        
      </Nav>
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
    }
  </AuthContext.Consumer>
  </>
  );
}

export default Menu;