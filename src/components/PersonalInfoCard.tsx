import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";


export default function PersonalInfo() {
  return (
     <Box>
        <Paper
            elevation={3}
            sx={{
            p: 3,
            mt: 3,
            mx: "auto",
            textAlign: "center",
            width:
            {
                xs: "80%",  
                sm: "80%",   
                md: "70%",   
                lg: "100%",   
            },
            borderRadius:3,
            }}
        >
            <Avatar sx={{ mx: "auto", mb: 2 }}>S</Avatar>
            <Typography variant="h4">Sandy Mosaad</Typography>

            <Typography variant="h6">sandy@gmail.com</Typography>

            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                mt: 3,
            }}
            >
                <Button variant="outlined" color="info" sx={{ width: "fit-content" }}>
                <EditIcon sx={{px:1}} />
                   Edit
                </Button>

                <Button variant="outlined" color="info" sx={{ width: "fit-content" }}>
                <LogoutIcon sx={{px:1}} />
                   Logout
                </Button>
            </Box>
        </Paper>
     </Box>
  )
}

