import React from "react"
import {   
    Switch,
    Route,
    Redirect
  } from "react-router-dom"


  import AltaAfi from '../Pages/AltaAfi';
  import DelCABAGBA from '../Pages/DelCABAGBA';
  import Progprevent from '../Pages/Progprevent';
  import Home from '../Pages/Home';
  import Registro from '../Pages/Registro';
  import Noticias from '../Pages/Noticias';

  import InfoHeader from '../Components/InfoHeader';
  import Menu from '../Components/Menu';
  import ScrollTopArrow from '../Components/ScrollTopArrow';
  import LoginFB from "../Pages/LoginFB";
  import Footer from '../Components/Footer';

  function Public (){     
    return(
        <>
        <InfoHeader />
        <Menu />
            <Switch>
                
            <Route path="/altaAfi">
                <AltaAfi />
            </Route>
            <Route path="/delCABAGBA">
                <DelCABAGBA />
            </Route>
            <Route path="/progprevent">
                <Progprevent />
            </Route>
            <Route path="/noticias">
                <Noticias />
            </Route>

            <Route path="/loginFB">
            <LoginFB />
            </Route>

            <Route path="/registro">
                <Registro />
            </Route>
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
export default Public