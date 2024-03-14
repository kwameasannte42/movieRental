// Header.js

import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify"; // Import toast functionality
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import auth from "./firebase";

const LogoutButton = ({ onLogout }) => (
  <Button color="inherit" onClick={onLogout}>
    Logout
  </Button>
);

const LoginButton = () => (
  <Button color="inherit" component={Link} to="/login">
    Login
  </Button>
);

function Header() {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      toast.error("Error logging out. Please try again later.");
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Movie Rental
            </Link>
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <>
                <Button color="inherit" component={Link} to="/cart">
                  Cart
                </Button>
                <LogoutButton onLogout={handleLogout} />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </Toolbar>
      </AppBar>
      <ToastContainer />
    </>
  );
}

export default Header;
