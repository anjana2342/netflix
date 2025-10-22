import { useNavigate,useLocation } from "react-router-dom";
import "../App.css"

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname.includes("/home")

    const handleSignOut = () =>{
        navigate("/")
    }

    return(
        <nav className="navbar">
            <h1 className="logo" onClick={() => navigate("/home")} style={{cursor:"pointer"}}>NETFLIX</h1>
            <div className="nav">
                {isHomePage && (
                    <select name="" className="language">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                    </select>
                )}
                <button className="signout" onClick={handleSignOut}>Signout</button>

            </div>


        </nav>
    )
}
export default Navbar;