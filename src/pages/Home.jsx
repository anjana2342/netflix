import { useNavigate } from "react-router-dom";
import { useEffect,useEffectEvent,useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../App.css"


const API_KEY = import.meta.env.VITE_TMDB_KEY;

function Home(){
    const navigate= useNavigate();
    const [movies,setMovies]=useState([])
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const handleSignOut = () =>{
        navigate("/")
    }

    useEffect(()=>{
        const fetchTrending = async () =>{
            try{
                const res=await axios.get(
                    `https://api.themoviedb.org/3/trending/movie/week`,
                    {
                        params:{api_key:API_KEY}
                    }
                );
                setMovies(res.data.results.slice(0,9));
            }catch(error){
                console.error("error fetching trending movies:",error)
            }
        }
        fetchTrending()
    },[])

    return(
        <div className="home">
         
            <Navbar/>
                 
                       <div className="ca">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel at any time</p>
        <button className="signup-btn">Sign Up</button>
      </div>

         <div className="trending">
              <h2>trending now</h2>
              <div className="movie-container">
                {movies.map((movie,index)=>
                    movie.poster_path ?(
                <div key={movie.id} className="movie-card"      onMouseEnter={()=>setHoveredMovie(movie)}  onMouseLeave={()=>setHoveredMovie(null)}    onClick={()=>navigate(`/movie/${movie.id}`)}>
                   
                  <div className="movie-sample">{hoveredMovie?.id === movie.id ?(<video src="/videos/sample.mp4" autoPlay loop muted className="movie-video" />):(
                   
                    
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-poster"/>)}
                    </div>
                    <span className="index">{index+1}</span>
                  {/* <p>{movie.title}</p> */}
                </div>

                ):null

               ) }
              </div>
         </div>
                 <Footer/>
        </div>
    )
}

export default Home;