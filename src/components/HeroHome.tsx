import { Box, Button, Paper, Typography } from "@mui/material";
import cart from "../../public/cart.png";
import Image from "next/image";

export default function HeroHome() {
  return (
    <Box sx={{ 
          pt: 12,
          px: 2 ,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          p: 4,
          background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)'
          }}>

        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h2" sx={{ mt: 10 , color: 'primary.main', fontWeight: 'bold' }}>
            Welcome to Our E-commerce Store!
          </Typography>

          <Typography variant="body1" sx={{ my: 2 }}>
            Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
          </Typography>

          <Button variant="contained" color="primary">
            Shop Now
          </Button>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Image src={cart} alt="cart" width={350} quality={95} />
        </Box>
    </Box>
  );
}