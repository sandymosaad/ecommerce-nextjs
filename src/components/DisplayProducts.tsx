"use client";

import {Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import { featuredProducts } from "../app/staticData/landingPageData";
import FeaturedAndTrendingCard from "./FeaturedAndTrendingCard";
import SortProducts from "./SortProducts";
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import {Product} from "@/interfaces/Product";
export default function DisplayProducts() {
   const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
    const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px
    const cols = isMobile ? 1 : isTablet ? 2 : 4;

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data || []);
        }
        fetchProducts();
    }, []);

    return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , gap:4 }}>
        <SortProducts/>

      <ImageList sx={{ gap: 24, width: '100%' }} cols={cols}>
            {products.map((item, index) => (
              (
                <FeaturedAndTrendingCard 
                  key={item._id || index} 
                  item={{ img: item.images[0], title: item.name, rate: item.rating || 0, price: item.price || 0 }} 
                />
              ) 
            ))}
      </ImageList>
     
   </Box>
}

  