// App.js
import React from 'react';
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

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        <Header /> {/* Render Header component */}
        <Routes>
          <Route path="/" element={<MovieList />} /> {/* Render MovieList component */}
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
