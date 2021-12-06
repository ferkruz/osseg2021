import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function BreadKrumb(props) {

    //const {rutasPag} = props

    //console.log(props.menuTipoUser)
    return (
     <>

        <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate fadeInUp ftco-animated pb-5">
               
            <Breadcrumb className="col-md-9 ftco-animate fadeInUp ftco-animated pb-5 ">

                {props.menuTipoUser.map(rutas=>
                    <Breadcrumb.Item linkAs={Link} 
                    linkProps={{ to: `/${rutas}` }} className="breadcrumbs mb-2">
                    <span className="mr-2"><h4>{rutas} <i class="fa fa-chevron-right"></i></h4></span>
                    </Breadcrumb.Item>
                )}


                <Breadcrumb.Item active className="breadcrumbs mb-2"><span className="mr-2"><br/><h1 className="mb-0 bread"> <span> {props.act} </span></h1></span></Breadcrumb.Item>

            </Breadcrumb>
            </div>
            </div>
        </div>
        </section>

     </> 
    );
  }

  export default BreadKrumb;