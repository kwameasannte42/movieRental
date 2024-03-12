// MovieDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'b7893bd3'; // Your API key
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movie Details
      </Typography>
      {movieDetails ? (
        <div>
          <Typography variant="h5" gutterBottom>
            Title: {movieDetails.Title}
          </Typography>
          {/* Display other movie details as needed */}
        </div>
      ) : (
        <Typography variant="body1">
          Loading...
        </Typography>
      )}
    </div>
  );
}

export default MovieDetail;
