import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
         

    const handleLogin = () =>{
        const savedUser =JSON.parse(localStorage.getItem("user"));

        if(!savedUser){
            alert("No account found please sign up first")
            navigate("/signup")
            return
        }
        if(email === savedUser.email && password === savedUser.password){
            alert("Login successfull")
            navigate("/home")

        }else{
            alert("invalid email or password")
        }
    }   
    return(
        <div className="loginpage">
            <div className="box">
              <h1>Sign in</h1>
              <input type="text"  placeholder="Email or mobile number" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

                <button className="signbtn" onClick={handleLogin}>Sign in</button>

              
           <div className="signup">
            New to Netflix?<a href="" onClick={(e) =>{
                e.preventDefault()
                navigate("/signup")

            }}> Sign up now</a>

           </div>
 

            </div>

        </div>
    )
}

export default Login;