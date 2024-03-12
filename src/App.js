// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import RentalCart from './components/RentalCart';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup'; // Import Signup component
import ResetPassword from './components/ResetPassword'; // Import ResetPassword component
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
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          {user ? (
            <Route path="/cart" element={<RentalCart />} />
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> {/* Add route for Signup component */}
              <Route path="/reset-password" element={<ResetPassword />} /> {/* Add route for ResetPassword component */}
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
