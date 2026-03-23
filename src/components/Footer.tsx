import { Box, Container, Typography, Link, Divider, Stack, Grid } from '@mui/material';

export default function Footer() {
  const background = 'linear-gradient(to right, #f5f7fa, #c3cfe2)';
  return (
    <Box component="footer" sx={{ background: background, py: 6 , mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">          
          <Grid  >
            <Typography variant="h6" color="text.primary" gutterBottom>
              ShopHub
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Your one-stop shop for all your needs. Quality products at great prices.
            </Typography>   
          </Grid>

          <Grid>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Shop
            </Typography>

            <Stack spacing={1}>
              <Link href="#" variant="body2" color="inherit" underline="hover">All Products</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Electronics</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Fashion</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Home & Living</Link>
            </Stack>

          </Grid>

          <Grid>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Customer Service
            </Typography>
            <Stack spacing={1}>
              <Link href="#" variant="body2" color="inherit" underline="hover">Contact Us</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Shipping Info</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Returns</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">FAQ</Link>
            </Stack>
            
          </Grid>
          
          <Grid>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Account
            </Typography>
            <Stack spacing={1}>
              <Link href="#" variant="body2" color="inherit" underline="hover">My Account</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Order History</Link>
              <Link href="#" variant="body2" color="inherit" underline="hover">Shopping Cart</Link>
            </Stack>
            
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '} Sandy_Mosaad {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}