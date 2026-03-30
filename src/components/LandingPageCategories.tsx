"use client";
import ImageListItemCard from './ImageListItemCard';
import { ImageList, Typography, useTheme, useMediaQuery, Box, Button } from '@mui/material';
import FeaturedAndTrendingCard from './FeaturedAndTrendingCard';

interface LandingPageCategoriesProps {
  itemData: { 
    img: string; 
    title: string; 
    category?: string; 
    rate?: number; 
    price?: string 
  }[];
  title: React.ReactNode;
  customComponent: "ImageListItemCard" | "FeaturedAndTrendingCard"; 
}
export default function LandingPageCategories({itemData , title ,customComponent}: LandingPageCategoriesProps) {
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px

  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  return (
    <Box sx={{ py: 4, px: 2, my:4 }} >
    <Box sx={{mx: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'self-end' , gap: 1, mb: 2 }}>
      <Typography 
        variant="h4"
        sx={{ fontWeight: '700', my: 3,  color: 'primary.main' }}
      > 
        {title}
      </Typography>
      <Button variant="contained" sx={{   mb: 3 }}>
        View All
      </Button>
    </Box>
     <ImageList sx={{ gap: 24, width: '100%' }} cols={cols}>
        {itemData.map((item, index) => (
          customComponent === "ImageListItemCard" ? (
            <ImageListItemCard 
              key={item.img || index} 
              item={{ img: item.img, title: item.title, category: item.category || "" }} 
            />
          ) : (
            <FeaturedAndTrendingCard 
              key={item.img || index} 
              item={{
                img: item.img,
                title: item.title,
                rate: item.rate || 0,
                price: item.price || "",
              }} 
            />
          )
        ))}
      </ImageList>
    </Box>
  );
}