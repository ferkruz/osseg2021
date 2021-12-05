import React,{useState} from "react"
import AuthContext from "./AuthContext"

//import { Link, useHistory } from "react-router-dom";

function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login"))
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))
    
    
    const loginUser = (userInfo)=>{
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        setUserLogin(true)
        setUserInfo(userInfo)
    }
    const logoutUser = ()=>{
        localStorage.removeItem("login")
        localStorage.removeItem("userInfo")
        setUserLogin(false)
        setUserInfo(false)

        //history.push("/home");
    }

    return(
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider