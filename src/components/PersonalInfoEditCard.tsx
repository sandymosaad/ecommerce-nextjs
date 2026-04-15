import {  Box, Button, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Person } from "@mui/icons-material";

export default function PersonalInfoEditCard() {
  return (
       <Box >
        <Paper
            elevation={3}
            sx={{
            p: 3,
            mt: 3,
            // textAlign: "center",
            borderRadius:3,
            width:'100%',
            mx: "auto",
            }}
        >
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


        </Paper>
     </Box>
  )
}

