import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

import { Box, Button, Paper, Typography } from "@mui/material";
import PaperComponent from "./PaperComponent";

export default function AddressCard() {
  return (
    <PaperComponent>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOnIcon /> Address
        </Typography>

        <Button startIcon={<AddIcon />}>
          Add New
        </Button>
      </Box>
      <Box sx={{ mt: 2 ,backgroundColor:'#f5f5f5', p:2, borderRadius:2}}>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">NAME</Typography>
              <EditIcon />
          </Box>

          <Box >
              <Typography variant="h6">23 Main St</Typography>
              <Typography variant="h6">New York, NY 10001</Typography>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CallIcon /> 555-0123
              </Typography>
          </Box>
      </Box>
    </PaperComponent>
  );
}