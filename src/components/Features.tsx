import { features } from "@/app/staticData/landingPageData";
import { Box, Typography, Grid, Container } from "@mui/material";

export default function Features() {
  return (
    <Box sx={{ py: 6, backgroundColor: 'grey.100', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, sm: 15, md: 30 }} justifyContent="center">
          {features.map((item, index) => (
            <Grid key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: item.bgColor,
                  color: item.iconColor,
                }}
              >
                {item.icon}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: '700', mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}