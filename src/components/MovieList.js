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
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import "../MovieList.css";

function MovieList({ movies, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      onSearch("");
    } else {
      onSearch(searchQuery);
    }
  };

  const handleAddToCart = (movie) => {
    // Check if the movie is already in the cart
    const existingMovie = cart.find((item) => item.imdbID === movie.imdbID);

    if (existingMovie) {
      // If the movie is already in the cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.imdbID === movie.imdbID ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the movie is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...movie, quantity: 1 }]);
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
  <Card className="movie-card">
    <CardActionArea>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
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
      </Link>
    </CardActionArea>
    <IconButton onClick={() => handleAddToCart(movie)}>
      <AddShoppingCart />
    </IconButton>
  </Card>
</Grid>

        ))}
      </Grid>
    </div>
  );
}

export default MovieList;
