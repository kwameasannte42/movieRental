// SearchResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const apiKey = 'b7893bd3'; // Your API key
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
        setSearchResults(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display search results here */}
      {searchResults.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          {/* Display other movie details as needed */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
