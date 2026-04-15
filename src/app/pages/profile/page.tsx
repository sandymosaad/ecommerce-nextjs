import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import PersonalInfoCard from "@/components/PersonalInfoCard";
import PersonalInfoEditCard from "@/components/PersonalInfoEditCard";
import { A } from "@faker-js/faker/dist/airline-Dz1uGqgJ";
import AddressCard from "@/components/AddressCard";
import QuickActions from "@/components/QuickActions";

export default function page() {
  return (
    <Box>
        <Typography variant="h4">
          My Profile
        </Typography>
      <Box sx={{ display: "flex", width: "100%", mt: 15,
         flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
         }
      }}>

        <Box sx={{ mx: 'auto'}}>
          <PersonalInfoCard  />
        </Box>
       <Box sx={{width:'70%', mx: 'auto'}}>
        <PersonalInfoEditCard/>
        <AddressCard/>
        <QuickActions/>
       </Box>

      </Box>
    </Box>
   
  )
}