"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 , border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 1 }}>
      <Button variant="outlined" size="medium"  sx={{border:"none" , fontWeight:"bold"}} onClick={handleDecrease}>
        -
      </Button>
      <Typography variant="body1" fontWeight="bold">
        {quantity}
      </Typography>
      <Button variant="outlined" size="medium"  sx={{border:"none" , fontWeight:"bold"}} onClick={handleIncrease}>
        +
      </Button>
    </Box>
  )
}

