import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import PersonalInfoCard from "@/components/PersonalInfoCard";
import PersonalInfoEditCard from "@/components/PersonalInfoEditCard";
import AddressCard from "@/components/AddressCard";
import QuickActions from "@/components/QuickActions";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { cookies } from "next/headers";


export default async function page() {
  const cookiesStore = await cookies();
  const id = cookiesStore.get("id")?.value;

  let user = null;

  if (id && mongoose.Types.ObjectId.isValid(id)) {
    await connectDB();
    user = await User.findById(id).lean();
    console.log("User fetched in page component:", user); // Debugging log
  }

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
          <PersonalInfoCard user={user}  />
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
        <PersonalInfoEditCard user={user}/>
        <AddressCard user={user}/>
        <QuickActions/>
       </Box>

      </Box>
    </Box>
   
  )
}