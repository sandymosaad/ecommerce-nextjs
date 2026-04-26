import { Box, Button, Typography } from "@mui/material";
import PaperComponent from "./PaperComponent";

export default function QuickActions() {
  return (
    <PaperComponent>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Quick Actions
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center',}}>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
          View Order History
        </Button>
        <Button variant="outlined" color="primary">
          Continue Shopping
        </Button>
      </Box>
      </PaperComponent>
  )
}

