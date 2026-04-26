import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import PersonalInfoCard from "@/components/PersonalInfoCard";
import PersonalInfoEditCard from "@/components/PersonalInfoEditCard";
import { A } from "@faker-js/faker/dist/airline-Dz1uGqgJ";
import AddressCard from "@/components/AddressCard";
import QuickActions from "@/components/QuickActions";

export default function page() {
  return (
    <Box>
        <Typography variant="h4" sx={{
          textAlign: "center",
           mt:{
            xs:9,
            sm:14,
            md:15,
            lg:15,
           } 
            }}>
          My Profile
        </Typography>
      <Box sx={{ display: "flex", width: "100%",
         flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
         }
      }}>

        <Box sx={{width:{
          xs: '100%',
          sm: '100%',
          md: '70%',
          lg: '30%',
        }
          , mx:{
            xs: 'auto',
            sm: 'auto',
            md: 'auto',
            lg: 5,
          }}}>
          <PersonalInfoCard  />
        </Box>
       <Box sx={{
        width:{
          xs: '100%',
          sm: '100%',
          md: '70%',
          lg: '70%',
        },
        mx: 'auto'
        }}>
        <PersonalInfoEditCard/>
        <AddressCard/>
        <QuickActions/>
       </Box>

      </Box>
    </Box>
   
  )
}