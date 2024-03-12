import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import RentalCart from "./components/RentalCart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./components/firebase";

function App() {
  const [user, loading] = useAuthState(auth);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const apiKey = "b7893bd3"; // API key
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
      );
      const data = await response.json();
      setSearchResults(data.Search || []);
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
        <Header onSearch={handleSearch} />{" "}
        
        <Routes>
          <Route path="/" element={<MovieList movies={searchResults} />} />{" "}
          
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
