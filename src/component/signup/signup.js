import React,{useState} from "react"
import "./signup.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
const Signup =()=>{
    const history= useHistory()
    const [user,setUser]=useState({
        name:" ",
        email: " ",
        password: " ",
        reEnterPassword: " "
    }
    )
    const handleChange= e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]: value
        });
    }
    const signup=()=>{
        const {name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword)){
        axios.post("http://localhost:9003/signup",user)
        .then(res=>{alert(res.data.message)
        history.push("/login")
        })

        }else{
            alert("invalid input")
        }
    }
    // const signup = async () => {
    //     const { name, email, password, reEnterPassword } = user;
    //     if (name && email && password && (password === reEnterPassword)) {
    //         try {
    //             const response = await axios.post("http://localhost:9002/signup", user);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error:", error);
    //             alert("Failed to register user");
    //         }
    //     } else {
    //         alert("Invalid input");
    //     }
    // };

    return (
        <div className="sign">
            {/* {console.log("User",user)} */}
            <h1>Signup</h1>
            <input type="text" name ="name"  onChange={handleChange} placeholder="Enter your name"></input>
            <input type="text" name ="email"  placeholder="Enter email" onChange={handleChange}></input>
            <input type="password" name ="password" placeholder="Enter password" onChange={handleChange}></input>
            <input type="password" name ="reEnterPassword"  placeholder="Re-enter password" onChange={handleChange}></input>
            <div className="button" onClick={signup}>Signup</div>
            <div>or</div>
            <div className="button" onClick={()=>history.push("/login")}>Login</div>
        </div>
    );
}
export default Signup