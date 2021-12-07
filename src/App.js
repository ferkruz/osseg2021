import React from "react"
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Public from './Routes/Public';
import Afiliados from './Routes/Afiliados';
import AuthProvider from "./Context/AuthProvider";
import AuthContext from "./Context/AuthContext";
import InfoLogin from "./Components/InfoLogin";


function App() {
  return (

    <AuthProvider>    
      <AuthContext.Consumer>
      {
      context=> 
      <>
      {context.userInfo && 
        <>
        <InfoLogin nombre={context.userInfo.nombre} apellido={context.userInfo.apellido} imed={context.userInfo.userId} />
        <Router><Afiliados /></Router>
        </>
      }
      {!context.userInfo && 
        <>
        <Router><Public /></Router>
        </>
      }
      </>
      }
      </AuthContext.Consumer>
    </AuthProvider> 
  );
}

export default App;
