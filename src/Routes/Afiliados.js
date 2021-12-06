import React from "react"
import {   
    Switch,
    Route,
    Redirect
  } from "react-router-dom"


  import DelCABAGBA from '../Pages/DelCABAGBA';
  import Progprevent from '../Pages/Progprevent';
  import Home from '../Pages/Home';
  import Registro from '../Pages/Registro';
  import MenuAfi from "../Components/MenuAfi";
  import Noticias2 from "../Pages/Noticias2";
  import CartillaAfi from "../Pages/CartillaAfi";

  import InfoHeader from '../Components/InfoHeader';
  import Menu from '../Components/Menu';
  import ScrollTopArrow from '../Components/ScrollTopArrow';
  import Footer from '../Components/Footer';



  function Afiliados (){     
    return(
        <>
        <InfoHeader />
        <Menu />
            <Switch>

            <Route path="/menuafis">
                <MenuAfi />
            </Route>

            <Route path="/cartilla">
                <CartillaAfi />
            </Route>
                
            <Route path="/delCABAGBA">
                <DelCABAGBA />
            </Route>
            <Route path="/progprevent">
                <Progprevent />
            </Route>
            <Route path="/noticias">                
                <Noticias2 />
            </Route>

            <Redirect path="/loginFB" to="/menuafis"/>
            <Redirect path="/altaAfi" to="/menuafis"/>

            <Route path="/registro">
                <Registro />
            </Route>
            
            <Redirect path="/loginFB" to="/menuafis"/>
            <Redirect path="/altaAfi" to="/menuafis"/>
            <Redirect path="/home" to="/"/>
            
            <Route path="/" exact>
                <Home />
            </Route>
                
            </Switch>            
        <ScrollTopArrow/>
        <Footer />
        </>
    )
  }
export default Afiliados