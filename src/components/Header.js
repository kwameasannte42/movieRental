import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
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

function Header({ onSearch }) {
  const [user] = useAuthState(auth);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      toast.error("Error logging out. Please try again later.");
    }
  };

  const handleSearch = () => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(searchQuery.trim());
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
            <TextField
              placeholder="Search movies"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                sx: { color: "white" },
                endAdornment: (
                  <Button color="inherit" onClick={handleSearch}>
                    <Search />
                  </Button>
                ),
              }}
            />
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
