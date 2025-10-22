import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Signup(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();

    const handleSignup = (e) =>{
        e.preventDefault();
    
       if(email && password){
        localStorage.setItem("user",JSON.stringify({email,password}));
        alert("successfully registered")
        navigate("/")
       }else{
            alert("please fill all fields")
       }
    }

return(
    <div className="signup-page">
        <div className="signup-box">
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Email "  value={email} onChange={(e) =>setEmail(e.target.value)}/>
                <input type="password"  placeholder="create password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <button type="submit" className="signupbtn">sign up

                </button>
            </form>
                    <div className="login-link">
                        Already have an account?
                        <a href="" onClick={(e) =>{
                            e.preventDefault();
                            navigate("/")
                        }}>sign in</a>
                    </div>

        </div>

    </div>
)
}

export default Signup;