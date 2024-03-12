import React,{useState} from "react"
import "./login.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
const Login =({setLoginUser})=>{
    const history= useHistory()
    const [user,setUser]=useState({
        
        email: " ",
        password: " ",
       
    })

    const handleChange= e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]: value
        });
    }
    const login=()=>{
         axios.post("http://localhost:9003/login",user)
         .then(res=>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
    })
    }
    return (
        <div className="login">Login
        
        <h1>Login</h1>
        <input type="text" name ="email"  placeholder="Enter username" onChange={handleChange}></input>
        <input type="password" name ="password"  placeholder="Enter password" onChange={handleChange}></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" onClick={()=>history.push("/signup")}>Signup</div>
        </div>
    )
}
export default Login