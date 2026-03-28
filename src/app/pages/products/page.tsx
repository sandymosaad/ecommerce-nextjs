"use client";
import { Box, Typography } from "@mui/material";
import Filter from "@/components/Filter";
import DisplayProducts from "@/components/DisplayProducts";
import { useState } from "react";
import {Product} from "@/interfaces/Product";
export default function page() {
    const [products, setProducts] = useState<Product[]>([]);

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 2 , mt:15 , mx:'auto'  }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>
            <Typography variant="body1">
                15 products found
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
            <Filter  products={products} setProducts={setProducts} />
            <DisplayProducts products={products} setProducts={setProducts} />
        </Box>
    </Box>
  )
}

