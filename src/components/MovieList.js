import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import "../MovieList.css"; // Import the CSS file for styling

function MovieList({ movies, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      onSearch("");
    } else {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="movie-list-container">
      <div className="search-container">
        <TextField
          placeholder="Search movies"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
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
