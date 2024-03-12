// components/MovieList.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from API here
    // Example:
    // fetchMovies().then(data => setMovies(data));
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {movies.map(movie => (
        <Grid item key={movie.id}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={movie.poster}
                alt={movie.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.year}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
