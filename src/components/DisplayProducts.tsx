"use client";

import { Box,Typography, ImageList, useMediaQuery, useTheme, Pagination, Stack } from "@mui/material";
import FeaturedAndTrendingCard from "./FeaturedAndTrendingCard";
import SortProducts from "./SortProducts";
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import {Product} from "@/interfaces/Product";
import Link from "next/link";

export default function DisplayProducts({ products, setProducts }:
   { products: Product[], setProducts: (products: Product[]) => void }) {
   const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
    const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px
    const cols = isMobile ? 1 : isTablet ? 2 : 4;

      const [page, setPage] = useState(1);
      const itemsPerPage = 8;

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data || []);
        }
        fetchProducts();
    }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
    return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , gap:4 }}>
        <SortProducts products={products} setProducts={setProducts}/>

      <ImageList sx={{ gap: 24, width: '100%' }} cols={cols}>
            {currentProducts.map((item, index) => (
              (
                <Link key={item._id || index} href={`/pages/products/${item.slug || item._id}`} style={{ textDecoration: 'none' }}>
                <FeaturedAndTrendingCard 
                  key={item._id || index} 
                  item={{
                    img: item.images[0],
                    title: item.name,
                    rate: item.rating || 0,
                    price: item.price || 0,
                    href: `/pages/products/${item.slug || item._id}`,
                  }} 
                />
                </Link>
              ) 
            ))}
      </ImageList>

      {products.length > itemsPerPage && (
        <Stack alignItems="center" mt={2}>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      )}
      {products.length === 0 && (
        <Typography variant="h6" align="center" color="textSecondary">
          No products found.
        </Typography>
      )}
   </Box>
}

  