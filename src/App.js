import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetails'; // Import MovieDetail component
import RentalCart from './components/RentalCart';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './components/firebase';
import axios from 'axios';

function App() {
  const [user, loading] = useAuthState(auth);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const apiKey = 'b7893bd3'; // Your API key
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
      setSearchResults(response.data.Search || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} /> {/* Pass handleSearch function as prop */}
        <Routes>
          <Route path="/" element={<MovieList movies={searchResults} />} /> {/* Pass search results as prop to MovieList */}
          <Route path="/movie/:id" element={<MovieDetail />} /> {/* Render MovieDetail component */}
          {user ? (
            <Route path="/cart" element={<RentalCart />} />
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </>
          )}
        </Routes>
        <Footer /> {/* Render Footer component */}
      </div>
    </Router>
  );
}

export default App;
