import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css"

const API_KEY = import.meta.env.VITE_TMDB_KEY;

function MovieDetails(){
    const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [showBack, setShowBack] = useState(false);


  useEffect(()=>{
    const fetchMovieDetails = async () =>{
        try{
            const MovieResult=await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                params: { api_key: API_KEY, append_to_response: "videos" },
            });
            setMovie(MovieResult.data);

             const trailer = MovieResult.data.videos.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) setTrailerKey(trailer.key);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails()
        
},[id]);
if (!movie) return <div className="loading">Loading..</div>

return(
      <div className="details-page">
      {/* <nav className="navbar">
        <h1 className="logo" onClick={() => navigate("/home")}>NETFLIX</h1>
        <button className="signout" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </nav> */}
      <Navbar/>
       <div className="details-content">
        <h2>{movie.title}</h2>
<div
  className="video-player"
  onMouseMove={() => setShowBack(true)}
  onMouseLeave={() => setShowBack(false)}
  style={{ position: "relative" }} 
>
        {trailerKey ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available</p>
        )}

  {showBack && (
    <button
      className="back-btn"
      onClick={() => navigate("/home")}
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 10,
      }}
    >
      Back
    </button>
  )}
</div>


 <div className="movie-info">
          <p><strong>Release Date:</strong> {movie.release_date}</p>
         
          <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MovieDetails;
  