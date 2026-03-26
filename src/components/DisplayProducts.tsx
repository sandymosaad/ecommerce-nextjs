"use client";

import {Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import { featuredProducts } from "../app/staticData/landingPageData";
import FeaturedAndTrendingCard from "./FeaturedAndTrendingCard";
import SortProducts from "./SortProducts";
import { B } from "@faker-js/faker/dist/airline-Dz1uGqgJ";
export default function DisplayProducts() {
   const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
    const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  
    const cols = isMobile ? 1 : isTablet ? 2 : 4;
   return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , gap:4 }}>
        <SortProducts/>

      <ImageList sx={{ gap: 24, width: '100%' }} cols={cols}>
            {featuredProducts.map((item, index) => (
              (
                <FeaturedAndTrendingCard 
                  key={item.img || index} 
                  item={{ img: item.img, title: item.title, rate: item.rate || 0, price: item.price || "" }} 
                />
              ) 
            ))}
      </ImageList>
     
   </Box>
}

  