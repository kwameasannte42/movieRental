import React, { useContext } from 'react';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RentalCartContext } from './RentalCartContext';

function RentalCart() {
  const { cartItems, removeFromCart } = useContext(RentalCartContext);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Rental Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.title}
                secondary={`Price: ${item.price}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default RentalCart;
