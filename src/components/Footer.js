// Footer.js
import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <Typography variant="body2" align="center" color="text.secondary">
      © {new Date().getFullYear()} Movie Rental
    </Typography>
  );
}

export default Footer;