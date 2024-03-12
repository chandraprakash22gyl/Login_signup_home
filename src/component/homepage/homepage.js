import React from "react"
import "./homepage.css"
const Homepage =(setLoginUser)=>{
    return (
        <div class="homepage">
            <h1>Homepage</h1>
            <div className="button" onClick={()=>setLoginUser({})}>Log out</div>
        </div>
    )
}
export default Homepage