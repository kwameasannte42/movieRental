// components/MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movie Details
      </Typography>
      <Typography variant="h5" gutterBottom>
        Movie ID: {id}
      </Typography>
      {/* Fetch movie details based on ID from API */}
    </div>
  );
}

export default MovieDetails;
