import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../MovieList.css"; // Import the CSS file for styling

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "b7893bd3"; // Your API key
        const response = await axios.get(
          `http://www.omdbapi.com/?s=movie&apikey=${apiKey}`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list-container">
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/movie/${movie.imdbID}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="movie-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.Poster}
                    alt={movie.Title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Year: {movie.Year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieList;
