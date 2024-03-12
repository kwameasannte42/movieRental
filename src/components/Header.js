import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase";

function Header({ onSearch }) {
  const [user] = useAuthState(auth);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSearch = () => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(searchQuery.trim()); // Pass trimmed searchQuery to onSearch function
    }
  };

  return (
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
              sx: { color: "white" }, // Set text color to white
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
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
