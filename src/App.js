import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetails";
import RentalCart from "./components/RentalCart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./components/firebase";
import axios from "axios";

function App() {
  document.title = "Movie Rental";
  const [user, loading] = useAuthState(auth);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const apiKey = "b7893bd3"; // API key
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
      );
      setSearchResults(response.data.Search || []);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList movies={searchResults} onSearch={handleSearch} />
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
