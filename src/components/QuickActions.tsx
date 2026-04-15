import { T } from "@faker-js/faker/dist/airline-Dz1uGqgJ";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function QuickActions() {
  return (
    <Paper sx={{ p: 3, mt: 3, borderRadius: 3, 
        width:'100%'
    }}>
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
    </Paper>
  )
}

