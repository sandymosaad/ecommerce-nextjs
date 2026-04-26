import { Box, Paper } from "@mui/material";

export default function PaperComponent({ children }: { children: React.ReactNode }) {
  return (
      <Box >
        <Paper
            elevation={3}
            sx={{
            p: 3,
            mt: 3,
            mx: "auto",
                borderRadius:3,
            width:{
                xs: "80%",  
                sm: "80%",   
                md: "70%",   
                lg: "80%",   
            },
           
            }}
        >
            {children}

        </Paper>
     </Box>
  )
}
