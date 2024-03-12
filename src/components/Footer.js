// Footer.js
import React from 'react';
import { Typography } from '@mui/material';
import '../Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} Movie Rental
        </Typography>
      </footer>
    </div>
  );
}

export default Footer;