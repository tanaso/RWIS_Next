import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './FabWithText.css'; // Import your custom CSS

const FabWithText = () => {
  return (
    <Fab variant="extended">
      <AddIcon />
      <span className="fabText">Add Item</span>
    </Fab>
  );
};

export default FabWithText;
