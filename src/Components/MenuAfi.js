import React from "react"
import { Container } from 'react-bootstrap';
import BreadKrumb from "../Components/BreadKrumb";

import '../css/styleCards.css'

function MenuAfi() {
  
  const rutasPage=["Home"]
  return (
    <>
    <BreadKrumb menuTipoUser={rutasPage} act="Menu Afiliados" />


      <Container>
        <div className="row">

          <div className="col-lg-12 col-md-12 col-sm-12 ftco-animate fadeInUp ftco-animated pb-5">           
            
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">
 
                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
              </div>
              
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
              </div>
              
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
              </div>

              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  
                  <div className="solu_title">
                    <h2>Cartilla Médica</h2>
                  </div>
                  <div className="solu_description">

                    <input type="submit" value="Ingresar" className="btn btn-secondary py-2 px-3"/>
                  </div>
                </div>
              </div>
            </div>  

          </div>

        </div>
      </Container>


</>
  );
}

export default MenuAfi;