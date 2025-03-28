import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ViewDetails.css'; // Custom CSS for extra styling

const ViewDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=900b19f4&i=${id}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <h2 className="text-center mt-4">Loading...</h2>;

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="header-section mb-4">
        <h1 className="fw-bold movie-title">{movieDetails.Title} ({movieDetails.Year})</h1>
        <p className="text-muted movie-meta">{movieDetails.Genre} | {movieDetails.Runtime} | {movieDetails.Released}</p>
      </div>

      {/* Poster and Summary Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <img
            src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://via.placeholder.com/400"}
            className="img-fluid rounded shadow-lg poster"
            alt={movieDetails.Title}
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex align-items-center mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
                 alt="IMDb" width="50" className="me-2" />
            <span className="fs-4 fw-bold imdb-rating text-warning">{movieDetails.imdbRating}</span>
            <span className="text-muted ms-2">/ 10</span>
          </div>
          <p className="lead movie-plot">{movieDetails.Plot}</p>
        </div>
      </div>

      {/* Cast & Crew Section */}
      <div className="cast-crew-section mb-4">
        <h3 className="fw-bold mb-3">Cast & Crew</h3>
        <div className="row">
          {/* Cast */}
          <div className="col-md-6">
            <h5 className="fw-bold">Main Cast:</h5>
            <p>{movieDetails.Actors}</p>
          </div>
          {/* Crew */}
          <div className="col-md-6">
            <h5 className="fw-bold">Crew:</h5>
            <p><strong>Director:</strong> {movieDetails.Director}</p>
            <p><strong>Writer(s):</strong> {movieDetails.Writer}</p>
            <p><strong>Producer(s):</strong> {movieDetails.Production}</p>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="additional-details-section mb-4">
        <h3 className="fw-bold mb-3">Additional Details</h3>
        <div className="row">
          <div className="col-md-6">
            <p><strong>🎬 Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>🌎 Country:</strong> {movieDetails.Country}</p>
            <p><strong>🗣️ Language:</strong> {movieDetails.Language}</p>
            <p><strong>🕰️ Runtime:</strong> {movieDetails.Runtime}</p>
          </div>
          <div className="col-md-6">
            <p><strong>📅 Released:</strong> {movieDetails.Released}</p>
            <p><strong>🏆 Awards:</strong> {movieDetails.Awards}</p>
            <p><strong>💰 Box Office:</strong> {movieDetails.BoxOffice || "N/A"}</p>
            <p><strong>📊 Metacritic Score:</strong> {movieDetails.Metascore || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="reviews-section mb-4">
        <h3 className="fw-bold mb-3">User Reviews</h3>
        <div className="row">
          {/* Example User Review */}
          <div className="col-md-12">
            <div className="review-card">
              <h5>John Doe</h5>
              <p>⭐️⭐️⭐️⭐️⭐️ - "An incredible film! Must watch!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="ratings-section mb-4">
        <h3 className="fw-bold mb-3">Ratings</h3>
        <div className="row">
          {movieDetails.Ratings && movieDetails.Ratings.map((rating, index) => (
            <div key={index} className="col-md-4 mb-2">
              <div className="card h-100 shadow-sm rating-card">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{rating.Source}</h5>
                  <p className="card-text">{rating.Value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Section */}
      <div className="production-section mb-4">
        <h3 className="fw-bold mb-3">Production</h3>
        <p><strong>🏢 Production:</strong> {movieDetails.Production || "N/A"}</p>
        <p><strong>📝 Website:</strong> {movieDetails.Website || "N/A"}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
