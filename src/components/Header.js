// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase';

function Header() {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    // Sign out the user
    // auth.signOut();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Movie Rental</Link>
        </Typography>
        {user ? (
          <>
            <Button color="inherit" onClick={handleSignOut}>Logout</Button>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
