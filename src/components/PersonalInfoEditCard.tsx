import {  Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Person } from "@mui/icons-material";
import PaperComponent from "./PaperComponent";
export default function PersonalInfoEditCard() {
  return (
    <PaperComponent>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb:3}}>
                <Typography variant="h4">Personal Information </Typography>
                <Button sx={{ width: "fit-content" }}>
                    <EditIcon sx={{px:1}} />
                    Edit
                </Button>
            </Box>
           <Box>
            <Typography variant="h6" sx={{color:'gray'}}><Person sx={{mx:1 , fontSize:18}}/> Sandy Mosaad</Typography>
            <Typography variant="h6" sx={{color:'gray'}}><EditIcon sx={{mx:1, fontSize:18}}/> sandy@gmail.com</Typography>
           </Box>
   </PaperComponent>
  )
}

