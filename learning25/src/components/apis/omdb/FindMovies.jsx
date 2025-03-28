import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FindMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getMovies = async () => {
    if (!searchInput) return;
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=900b19f4&s=${searchInput}`
      );
      setMoviesList(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="fw-bold">🎬 Search for Movies & TV Shows</h1>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mt-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter movie or TV show title..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button onClick={getMovies} className="btn btn-warning ms-2 fw-bold">
          🔍 Search
        </button>
      </div>

      {/* Movie List */}
      <div className="row mt-4">
        {moviesList.length > 0 ? (
          moviesList.map((movie) => (
            <div key={movie.imdbID} className="col-md-3 mb-4">
              <div className="card h-100 shadow">
                <Link to={`/viewdetails/${movie.imdbID}`}>
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                    className="card-img-top"
                    alt={movie.Title}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{movie.Title}</h5>
                  <p className="card-text text-muted">{movie.Year}</p>
                  <Link to={`/viewdetails/${movie.imdbID}`} className="btn btn-dark">
                    🎞️ View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-muted mt-3">No results found.</h5>
        )}
      </div>
    </div>
  );
};

export default FindMovies;
